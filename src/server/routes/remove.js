import { users } from '../db'
import { ATTACHMENT_COLOR } from '../constants'

const generateBody = async ({ user_id, user_is_intern }) => {
    if (user_is_intern) {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Whoops',
                            value: "Looks like you can't do that."
                        }
                    ]
                }
            ]
        }
    }

    const wasRemoved = await users.updateStatus(user_id, 'removed')
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: wasRemoved ? "We're sad to see you go :(" : 'Error',
                        value: wasRemoved
                            ? `<@${user_id}> has been removed. You won't be paired anymore.`
                            : `<@${user_id}> does not exist.`
                    }
                ]
            }
        ]
    }
}

export default generateBody
