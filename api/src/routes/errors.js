import { languages } from "../db"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, text, command, error }) => {
    return errors
        .create({ user_id, user_name, text, command, error })
        .then(() => response.send("Invalid command. Try running `/pairme help` to see available options."))
}

export default generateBody
