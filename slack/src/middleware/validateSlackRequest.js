import crypto from "crypto"
import qs from "qs"

import { logger } from "../utilities"
import config from "../config"

const validateSlackRequest = (request, response, next) => {
    if (config.whiteListUrls.includes(request._parsedUrl.pathname)) {
        // TODO Hello Security Vulnerability. This should be deleted.
        return next()
    }

    const slackSignature = request.headers["x-slack-signature"]
    const requestBody = qs.stringify(request.body, { format: "RFC1738" })
    const timestamp = request.headers["x-slack-request-timestamp"]

    if (typeof slackSignature === "undefined") {
        logger({
            request: request,
            type: logger.types.error,
            message: "slackSignature was missing"
        })
        response.redirect("https://letspair.online/error500")
    }

    const time = Math.floor(new Date().getTime() / 1000)
    if (Math.abs(time - timestamp) > 300) {
        logger({
            request: request,
            type: logger.types.error,
            message: "timestamp time was wrong"
        })
        response.redirect("https://letspair.online/error500")
    }

    const sigBasestring = "v0:" + timestamp + ":" + requestBody

    const slackSigningSecret = config.slack.signing_secret

    const mySignature =
        "v0=" +
        crypto
            .createHmac("sha256", slackSigningSecret)
            .update(sigBasestring, "utf8")
            .digest("hex")

    if (crypto.timingSafeEqual(new Buffer.from(mySignature, "utf8"), new Buffer.from(slackSignature, "utf8"))) {
        return next()
    } else {
        logger({
            request: request,
            type: logger.types.error,
            message: "Validation Failed"
        })
        response.redirect("https://letspair.online/error500")
    }
}

export default validateSlackRequest
