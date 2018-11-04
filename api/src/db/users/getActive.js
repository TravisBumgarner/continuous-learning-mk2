import knex from "../knex"

const getActive = () => {
    return knex.select().from("users")
}

export default getActive
