import axios from "axios"
import express from "express"
import bodyParser from "body-parser"
// const Sentry = require("@sentry/node")

import { makeUrl, sendUserMessage } from "./utilities"
import * as middleware from "./middleware"
import { errors, users } from "./db"
import * as routes from "./routes"
import config from "./config"
import { access } from "fs"

// Sentry.init({ dsn: "https://07e183b574e24ba6ac7eb2a668e6736b@sentry.io/1317415" })

const app = express()

// Sentry must me the first middleware
// app.use(Sentry.Handlers.requestHandler())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(middleware.validateSlackRequest)

app.post("/", async (request, response, next) => {
    let responseBody

    // For reference, request.body: { command, text, user_id, user_name, channel_name, channel_id, team_domain }
    let { text } = request.body
    text = text.toLowerCase()

    if (text === "" || text === "help") {
        responseBody = await routes.help()
    } else if (text === "register") {
        responseBody = await routes.register(request.body)
    } else if (text === "unsubscribe") {
        responseBody = await routes.unsubscribe(request.body)
    } else if (text === "list_languages") {
        responseBody = await routes.list_languages(request.body)
    } else if (text === "status") {
        responseBody = await routes.status(request.body)
    } else if (text.startsWith("feedback")) {
        responseBody = await routes.feedback(request.body)
    } else {
        responseBody = await routes.errors(request.body)
    }
    response.json({ text: responseBody })
})

app.get("/make_groups", (request, response, next) => {
    routes.make_groups().then(message => response.send(message))
})

app.get("/auth", async (request, response, next) => {
    console.log("headsd")
    // Authorization codes may only be exchanged once and expire 10 minutes after issuance.
    const { code, state } = request.query
    console.log("code", code)
    const axiosResponse = await axios({
        url: "https://slack.com/api/oauth.access",
        method: "get",
        params: {
            client_id: config.slack.client_id,
            client_secret: config.slack.client_secret,
            code
        }
    })
    console.log(axiosResponse)

    const { ok, access_token, scope, user_id, team_name, team_id, incoming_webhook } = axiosResponse.data
    console.log(axiosResponse.data)

    users.create({ user_id, team_id, team_name, access_token, scope }).then(() => {
        response.send("All set! You can close this window.")
    })
})

app.get("/ok", (request, response, next) => response.send("Service is running"))

// The error handler must be before any other error middleware
// app.use(Sentry.Handlers.errorHandler())

export default app
