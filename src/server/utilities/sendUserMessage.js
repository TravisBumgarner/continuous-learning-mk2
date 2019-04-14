import axios from "axios"

import { makeUrl } from "../utilities"
import { ATTACHMENT_COLOR } from "../constants"
import { users } from "../db"

const sendUserMessage = (user_id, message) => {
    users.getById(user_id).then(user => {
        const { user_id, access_token } = user[0]
        console.log(user_id, access_token)
        const data = JSON.stringify({
            channel: user_id,
            attachments: [{ color: ATTACHMENT_COLOR, title: "Hey!", text: message }]
        })

        return axios.post("https://slack.com/api/chat.postMessage", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`
            }
        })
    })
}

export default sendUserMessage
