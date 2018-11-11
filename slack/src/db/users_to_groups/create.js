import knex from "../knex"

const create = (user_id, group_id) => {
    return knex("users_to_groups").insert({ user_id, group_id })
}

export default create
