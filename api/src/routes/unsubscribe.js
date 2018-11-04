import { users } from "../db"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}

    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, team_domain }) => {
    return users
        .remove({ user_id, user_name, team_domain })
        .then(wasDeleted => {
            return wasDeleted ? `<@${user_id}> has been removed.` : `<@${user_id}> does not exist.`
        })
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
