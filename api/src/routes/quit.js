import { users } from "../db"
import { ATTACHMENT_COLOR } from "../constants"

const generateBody = async ({ user_id }) => {
    const wasDeleted = await users.remove(user_id)
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: wasDeleted ? "We're sad to see you go :(" : "Error",
                        value: wasDeleted
                            ? `<@${user_id}> has been removed. You won't be paired starting next week.`
                            : `<@${user_id}> does not exist.`
                    }
                ]
            }
        ]
    }
}

export default generateBody
