import { feedback } from "../db"
import { ATTACHMENT_COLOR } from "../constants"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, text }) => {
    const result = await feedback.create({ user_id, user_name, text })
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: "Feedback Received!",
                        value: "Thank you for your help."
                    }
                ]
            }
        ]
    }
}

export default generateBody
