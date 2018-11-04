import { users } from "../db"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {
        "23505": `<@${user_id}> already exists.`
    }

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, team_domain }) => {
    return users
        .create({ user_id, user_name, team_domain })
        .then(response => `<@${user_id}> has been added.`)
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
