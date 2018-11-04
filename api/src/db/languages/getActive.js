import knex from "../knex"

const getActive = () => {
    return knex
        .select("language")
        .from("languages")
        .where("status", "active")
}

export default getActive
