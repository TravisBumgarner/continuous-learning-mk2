import { languages } from "../db"

const generateErrorMessage = (errorCode, user_id) => {
    const ERROR_CODES_DICT = {}

    const errorMessage = ERROR_CODES_DICT[errorCode]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, team_domain }) => {
    return languages
        .getActive()
        .then(response => {
            const availableLanguages = response.map(row => row.language).join(", ")
            return `Available languages are ${availableLanguages}`
        })
        .catch(error => generateErrorMessage(error.code, user_id))
}

export default generateBody
