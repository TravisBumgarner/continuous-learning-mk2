import axios from 'axios'

import { users } from '../db'
import { ROOT_COMMAND, ATTACHMENT_COLOR } from '../constants'
import { makeUrl, formatCommandExample } from '../utilities'
import config from '../config'

const formatAsCode = text => '```' + text + '```'

const generateBody = async ({ user_id }) => {
    const user = await users.getById(user_id)
    const userExists = user.length

    if (userExists) {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Welcome back!',
                            value: `This week, you'll be working with USER HERE on the problem below. Reach out, pick a time, and get to coding.`
                        }
                    ]
                }
            ]
        }
    } else {
        const registrationUrl = makeUrl('https://slack.com/oauth/authorize', {
            client_id: config.slack.client_id,
            scope: config.slack.scope,
            team: config.slack.team
        })

        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: "Welcome to Let's Pair!",
                            value: `<${registrationUrl}|Click here> to register. If you'd like to learn more, visit our website <https://letspair.online|here>. To learn what other commands are available, type ${formatCommandExample(
                                'help'
                            )}.`
                        }
                    ]
                }
            ]
        }
    }
}

export default generateBody
