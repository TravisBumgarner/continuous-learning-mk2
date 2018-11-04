import knex from "../knex"

import { exercises } from "../index"

const create = (user_id_left, user_id_right) => {
    return exercises
        .getActive()
        .then(exercise => knex("pairs").insert({ user_id_left, user_id_right, exercise: exercise.text }))
        .catch(e => console.log(e))
}

export default create
