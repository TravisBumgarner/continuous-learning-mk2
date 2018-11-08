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
    await users_to_groups.remove()
    const activeUsers = await users.getActive()

    if (activeUsers.length < 2) {
        return "Not enough people for grouping."
    }

    const activeUserIds = activeUsers.map(user => user.user_id)
    const pairedUserIds = zip(splitAt(activeUserIds.length / 2, shuffle(activeUserIds)))
    const exercise = await exercises.getActive()

    if (exercise.length < 1) {
        return "No exercise specified."
    }

    const exercise_id = exercise[0].exercise_id

    pairedUserIds.map(async ([user_id_1, user_id_2]) => {
        const group_id = await groups.create(exercise_id)

        await users_to_groups.create(user_id_1, group_id[0])
        await users_to_groups.create(user_id_2, group_id[0])
    })

    return "Grouping done!"
}

export default makeGroups
