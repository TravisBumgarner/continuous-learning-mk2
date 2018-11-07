import knex from "../knex"

const getActive = () => {

    return knex
        .select("exercise_id")
        .from("exercises")
        .where("status", "active")
        .limit(1)
}

export default getActive
