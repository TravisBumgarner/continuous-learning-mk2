import express from "express"
import bodyParser from "body-parser"
const Sentry = require("@sentry/node")

import { errors } from "./db"
import * as routes from "./routes"

Sentry.init({ dsn: "https://07e183b574e24ba6ac7eb2a668e6736b@sentry.io/1317415" })

const app = express()

// Sentry must me the first middleware
app.use(Sentry.Handlers.requestHandler())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/", (request, response, next) => {
    // For reference, request.body: { command, text, user_id, user_name, channel_name, channel_id, team_domain }
    let { text } = request.body
    text = text.toLowerCase()

    if (text === "" || text === "help") {
        response.send(routes.help())
    } else if (text === "subscribe") {
        routes.subscribe(request.body).then(responseBody => response.send(responseBody))
    } else if (text === "unsubscribe") {
        routes.unsubscribe(request.body).then(responseBody => response.send(responseBody))
    } else if (text === "list_languages") {
        routes.list_languages(request.body).then(responseBody => response.send(responseBody))
    } else if (text === "status") {
        routes.status(request.body).then(responseBody => response.send(responseBody))
    } else if (text.startsWith("feedback")) {
        routes.feedback(request.body).then(responseBody => response.send(responseBody))
    } else {
        console.log(request.body)
        errors
            .create(request.body)
            .then(() => response.send("Invalid command. Try running `/pairme help` to see available options."))
    }
})

app.get("/make_pairs", (request, response, next) => {
    routes.make_pairs().then(pairs => response.send(pairs))
})

app.get("/ok", (request, response, next) => response.send("Service is running"))

// The error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler())

export default app
