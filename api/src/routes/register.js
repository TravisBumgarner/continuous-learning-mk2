import { users } from "../db"
import { ROOT_COMMAND, ATTACHMENT_COLOR } from "../constants"
import { makeUrl } from "../utilities"
import axios from "axios"

import config from "../config"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {
        "23505": `<@${user_id}> already exists.`
    }

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async () => {
    const url = makeUrl("https://slack.com/oauth/authorize", {
        client_id: config.slack.client_id,
        scope: config.slack.scope,
        team: config.slack.team
    })

    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: "Register with Let's Pair",
                        value: `<${url}|Click here to get started.>`
                    }
                ]
            }
        ]
    }
}

export default generateBody
