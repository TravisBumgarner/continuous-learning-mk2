import express from "express"

const app = express()

app.get("/", (request, response) => response.send("Hello World"))
app.get("/ok", (request, response) => response.send("Service is running"))

export default app
