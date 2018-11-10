import knex from "../knex"

const remove = user_id => {
    return knex("users")
        .where("user_id", user_id)
        .del()
}

export default remove
