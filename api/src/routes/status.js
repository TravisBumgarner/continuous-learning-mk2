import { exercises, users } from "../db"
import { ATTACHMENT_COLOR } from "../constants"

const formatAsCode = text => "```" + text + "```"

const generateErrorMessage = (error, user_id) => {
    const ERROR_CODES_DICT = {}
    console.log(error)
    const errorMessage = ERROR_CODES_DICT[error.code]
    return errorMessage ? errorMessage : "An unknown error has occurred."
}

const generateBody = async ({ user_id }) => {
    const partner = await users.getPartner(user_id)
    let value
    let title

    if (partner) {
        const partner_id = partner[0].user_id
        const exercise = await exercises.getActive()

        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: "Get Coding!",
                            value: `This week, you'll be working with <@${partner_id}> on the problem below. Reach out, pick a time, and get to coding.`
                        },
                        {
                            title: `${exercise[0].title}`,
                            value: formatAsCode(exercise[0].text)
                        }
                    ]
                }
            ]
        }
    } else {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: "Too Fast!",
                            value: "You'll be matched with your first partner next week!"
                        }
                    ]
                }
            ]
        }
    }

    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: "Too Fast!",
                        value: "You'll be matched with your first partner next week!"
                    }
                ]
            }
        ]
    }
}

export default generateBody
