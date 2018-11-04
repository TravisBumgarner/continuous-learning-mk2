import express from "express"
import bodyParser from "body-parser"

import * as routes from "./routes"

import { endianness } from "os"

const app = express()

app.use(bodyParser())

app.post("/", (request, response) => {
    const { command, text, user_id, user_name, channel_name, channel_id, team_domain } = request.body

    if (text === "" || text === "help") {
        const responseBody = routes.help(request.body)
        response.send(responseBody)
    } else if (text === "subscribe") {
        routes.subscribe(request.body).then(responseBody => {
            response.send(responseBody)
        })
    } else {
        response.send("Invalid command. Try running `/pairme help` to see available options.")
    }
})

app.get("/ok", (request, response) => response.send("Service is running"))

export default app
