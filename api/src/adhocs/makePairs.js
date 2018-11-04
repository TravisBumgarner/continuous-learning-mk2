// get all users
// make pairs
// if three left, make mob

import { knex, users } from "../db"

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

const makePairs = () => {
    return users
        .getActive()
        .then(activeUsers => {
            const pairedUsers = zip(splitAt(activeUsers.length / 2, shuffle(activeUsers)))
            return pairedUsers
        })
        .catch(error => console.log(error))
}

export default makePairs
