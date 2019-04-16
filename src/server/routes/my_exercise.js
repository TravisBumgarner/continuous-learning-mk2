import { exercises, users } from '../db'
import { ATTACHMENT_COLOR } from '../constants'

const formatAsCode = text => '```' + text + '```'

const generateBody = async ({ user_id, user_exists }) => {
    const partner = await users.getPartner(user_id)

    let value
    let title

    if (user_exists && partner) {
        const partner_id = partner[0].user_id
        const exercise = await exercises.getActive()

        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Get Coding!',
                            value: `This week, you'll be working with <@${partner_id}> on the problem below. Reach out, pick a time, and get coding.`
                        },
                        {
                            title: `${exercise[0].title}`,
                            value: formatAsCode(exercise[0].text)
                        }
                    ]
                }
            ]
        }
    } else if (user_exists && !partner) {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Too Fast!',
                            value: "You'll be matched with your first partner next week!"
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
                            title: 'Hmmmm...',
                            value: 'Please make an account first.'
                        }
                    ]
                }
            ]
        }
    }
}

export default generateBody
