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

    const isActive = await users.updateStatus(user_id, 'active')
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: isActive ? 'Welcome back!' : 'Error',
                        value: isActive
                            ? `<@${user_id}> is back in. You'll be paired next time.`
                            : `<@${user_id}> does not exist.`
                    }
                ]
            }
        ]
    }
}

export default generateBody
