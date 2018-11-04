import { users } from "../db"
import { ROOT_COMMAND } from "../constants"

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
        .then(response => `Welcome <@${user_id}>, check out \`${ROOT_COMMAND} help\` to get started!`)
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
