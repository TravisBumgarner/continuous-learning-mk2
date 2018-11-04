import { exercises } from "../db"

const formatAsCode = text => "```" + text + "```"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}
    console.log(error)
    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id, user_name, team_domain }) => {
    return Promise.all([exercises.getActive()])
        .then(responses => {
            const [exercise] = responses
            console.log(exercise)
            const body = [
                `This week, you'll be working on *${exercise[0].title}* with *NAME_HERE*`,
                formatAsCode(exercise[0].text)
            ].join("\n")
            console.log(body)
            return body
        })
        .catch(error => generateErrorMessage(error, user_id))
}

export default generateBody
