import axios from "axios"
import express from "express"
import bodyParser from "body-parser"
const Sentry = require("@sentry/node")

import * as middleware from "./middleware"
import * as routes from "./routes"
import { VALID_SUB_COMMANDS } from "./constants"
import { logger } from "./utilities"
import knex from "./db/knex"

const makeMigrationsAndSeeds = async () => {
    let retries = 5
    while (retries) {
        try {
            const response = await knex.migrate.latest().then(async () => {
                console.log(`Database connection established`)
                await knex.seed.run()
                console.log(`Database seeded`)
            })
            break
        } catch (error) {
            retries -= 1
            console.log(`Database connection retries left ${retries}`)
            await new Promise(res => setTimeout(res, 5000))
        }
    }
}
makeMigrationsAndSeeds()

const app = express()

if (process.env.NODE_ENV === "production") {
    Sentry.init({ dsn: "https://07e183b574e24ba6ac7eb2a668e6736b@sentry.io/1317415" })
    // Sentry must me the first middleware
    app.use(Sentry.Handlers.requestHandler())
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(middleware.validateSlackRequest)

app.post("/", async (request, response, next) => {
    let subCommand = request.body.text.split(" ")[0].toLowerCase()

    logger({ request: request.body, type: logger.types.log, route: "/", message: "slash command" })
    if (!VALID_SUB_COMMANDS.includes(subCommand)) {
        subCommand = "help"
    }

    const responseBody = await routes[subCommand](request.body)
    response.json(responseBody)
})

app.get("/make_groups", (request, response, next) => {
    routes.make_groups().then(message => response.send(message))
})

app.get("/auth", async (request, response, next) => {
    const responseBody = await routes.auth(request)
    response.redirect("http://letspair.online/welcome")
})

app.get("/ok", (request, response, next) => response.send("Service is running"))

if (process.env.NODE_ENV === "production") {
    // The error handler must be before any other error middleware
    app.use(Sentry.Handlers.errorHandler())
}

export default app
