import express from "express"
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser())

app.post("/", (request, response) => {
    const {command, text, user_id, user_name, channel_name, channel_id, team_domain} = request.body

    if(text === "" || text === "help"){
        response.send('Help is coming...')
    }

    if(text === "" || text === "help"){
        response.send('Help is coming...')
    }

    if(text === "" || text === "help"){
        response.send('Help is coming...')
    }

    else{
        response.send('Invalid command. Try running `/pairme help`')
    } 

    console.log(request.body)
    response.send("Hello World")
 })
 

app.get("/ok", (request, response) => response.send("Service is running"))

export default app
