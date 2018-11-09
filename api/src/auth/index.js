import axios from "axios"

import config from "../config"

const makeAuthUrl = code => {
    console.log("Authorizer was called")
    const oauthURL = `https://slack.com/oauth/authorize?`

    const params = {
        client_id: config.slack.client_id,
        scope: config.slack.scope,
        team: config.slack.team
    }
    const queryString = Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&")

    return oauthURL + queryString
}

export default { makeAuthUrl }
