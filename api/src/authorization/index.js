import axios from "axios"

import config from "../config"

// Scopes: https://api.slack.com/scopes
// TODO: Add state "The state parameter should be used to avoid forgery attacks by passing in a value that's unique to the user you're authenticating and checking it when auth completes."

const authorizer = code => {
    console.log("Authorizer was called")
    const oauthURL = "https://slack.com/oauth/authorize"

    axios({
        url: "https://slack.com/oauth/authorize",
        method: "get",
        params: {
            client_id: config.slack.client_id,
            scope: config.slack.scope,
            team: config.slack.team
        }
    })
}
