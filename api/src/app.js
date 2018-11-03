import express from "express"
import bodyParser from "body-parser"

import * as routes from "./routes"

import { endianness } from "os"

const app = express()

app.use(bodyParser())

app.post("/", (request, response) => {
    const {
        command,
        text,
        user_id,
        user_name,
        channel_name,
        channel_id,
        team_domain
    } = request.body

    if (text === "" || text === "help") {
        const responseBody = routes.help(request.body)
        response.send(responseBody)
    }

    if (text === "subscribe") {
        const responseBody = routes.subscribe(request.body)
        response.send(responseBody)
    }

    if (text === "" || text === "help") {
        response.send("Help is coming...")
    } else {
        response.send(
            "Invalid command. Try running `/pairme help` to see available options."
        )
    }

    console.log(request.body)
    response.send("Hello World")
})

app.get("/ok", (request, response) => response.send("Service is running"))

export default app
