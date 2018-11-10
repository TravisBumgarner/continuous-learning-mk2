import axios from "axios"

import { makeUrl } from "../utilities"
import { users } from "../db"

const sendUserMessage = (user_id, text) => {
    users.getById(user_id).then(user => {
        const { user_id, access_token } = user[0]
        console.log(user_id, access_token)
        const url = makeUrl("https://slack.com/api/chat.postMessage", {
            token: access_token,
            channel: user_id,
            text
        })
        axios.post(url)
    })
}

export default sendUserMessage
