import crypto from "crypto"
import qs from "qs"

import { errors } from "../db"
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
        return errors
            .create({ ...request.body, error: "slackSignature was missing" })
            .then(() => response.status(400).send("Invalid request"))
    }

    const time = Math.floor(new Date().getTime() / 1000)
    if (Math.abs(time - timestamp) > 300) {
        return errors
            .create({ ...request.body, error: "Validation Time Wrong" })
            .then(() => response.status(400).send("Invalid request"))
        return
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
        return errors
            .create({ ...request.body, error: "Validation Failed" })
            .then(() => response.status(400).send("Invalid Request"))
    }
}

export default validateSlackRequest
