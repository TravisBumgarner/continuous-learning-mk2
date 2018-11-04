import express from "express"
import bodyParser from "body-parser"

import * as routes from "./routes"

const app = express()

app.use(bodyParser())

app.post("/", (request, response) => {
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
        response.send("Invalid command. Try running `/pairme help` to see available options.")
    }
})

app.get("/makePairs", (request, response) => {
    routes.make_pairs().then(pairs => response.send(pairs))
})

app.get("/ok", (request, response) => response.send("Service is running"))

export default app
