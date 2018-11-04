import { feedback } from "../db"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, text }) => {
    return feedback
        .create({ user_id, user_name, text })
        .then(response => `Thank you for your feedback!`)
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
