import { users, groups, users_to_groups, exercises } from '../db'
import { sendUserMessage, formatCommandExample } from '../utilities'
import { ATTACHMENT_COLOR } from '../constants'

// Below code came from the internet, doesn't work for odd numbers of users.
var splitAt = function(i, xs) {
    var a = xs.slice(0, i)
    var b = xs.slice(i, xs.length)
    return [a, b]
}

var shuffle = function(xs) {
    return xs.slice(0).sort(function() {
        return 0.5 - Math.random()
    })
}

var zip = function(xs) {
    return xs[0].map(function(_, i) {
        return xs.map(function(x) {
            return x[i]
        })
    })
}

const makeGroups = async ({ user_is_admin }) => {
    if (!user_is_admin) {
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

    await groups.remove()
    await users_to_groups.remove()
    const activeUsers = await users.getActive()

    if (activeUsers.length < 2) {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Whoops',
                            value: 'Not enough people to make groups.'
                        }
                    ]
                }
            ]
        }
    }

    const activeUserIds = activeUsers.map(user => user.user_id)
    const pairedUserIds = zip(splitAt(activeUserIds.length / 2, shuffle(activeUserIds)))
    const exercise = await exercises.getActive()

    if (exercise.length < 1) {
        return {
            attachments: [
                {
                    color: ATTACHMENT_COLOR,
                    fields: [
                        {
                            title: 'Whoops',
                            value: 'Not enough people to make groups.'
                        }
                    ]
                }
            ]
        }
    }

    const exercise_id = exercise[0].exercise_id

    pairedUserIds.map(async ([user_id_1, user_id_2]) => {
        const group_id = await groups.create(exercise_id)
        await sendUserMessage(user_id_1, `New pairings are out, Check ${formatCommandExample('status')} for more info!`)
        await sendUserMessage(user_id_2, `New pairings are out, Check ${formatCommandExample('status')} for more info!`)
        await users_to_groups.create(user_id_1, group_id[0])
        await users_to_groups.create(user_id_2, group_id[0])
    })

    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: 'Success!',
                        value: 'Groupings done.'
                    }
                ]
            }
        ]
    }
}

export default makeGroups
