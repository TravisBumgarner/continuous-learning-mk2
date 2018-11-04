import knex from "../knex"

const getActive = () => {
    return knex
        .select("problem")
        .from("problems")
        .where("status", "active")
        .limit(1)
}

export default getActive
