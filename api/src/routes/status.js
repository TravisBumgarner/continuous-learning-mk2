import { exercises, users } from "../db"

const formatAsCode = text => "```" + text + "```"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}
    console.log(error)
    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id }) => {
    const partner = await users.getPartner(user_id)
    const partner_id = partner[0].user_id
    const exercise = await exercises.getActive()
    console.log(exercise)
    const body = [
        `This week, you'll be working on *${exercise[0].title}* with <@${partner_id}>`,
        formatAsCode(exercise[0].text)
    ].join("\n")

    return body
}

export default generateBody
