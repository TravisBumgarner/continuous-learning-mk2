import { knex, users, groups, users_to_groups, exercises } from "../db"

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

const makeGroups = async () => {
    await groups.remove()
    const activeUsers = await users.getActive()
    const activeUserIds = activeUsers.map(user => user.user_id)
    const pairedUserIds = zip(splitAt(activeUserIds.length / 2, shuffle(activeUserIds)))
    const exercise_id = await exercises.getActive()

    pairedUserIds.map(async ([user_id_1, user_id_2]) => {
        const group_id = await groups.create(exercise_id)
        await users_to_groups.create(user_id_1, group_id)
        await users_to_groups.create(user_id_2, group_id)
    })

    return "Grouping done!"
}

export default makeGroups
