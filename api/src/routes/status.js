import { exercises, pairs } from "../db"

const formatAsCode = text => "```" + text + "```"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}
    console.log(error)
    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, team_domain }) => {
    return Promise.all([exercises.getActive(), pairs.getPartner(user_id)])
        .then(responses => {
            const [exercise, partnerId] = responses
            const body = [
                `This week, you'll be working on *${exercise[0].title}* with <@${partnerId[0].user_id_right}>`,
                formatAsCode(exercise[0].text)
            ].join("\n")
            console.log(body)
            return body
        })
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
