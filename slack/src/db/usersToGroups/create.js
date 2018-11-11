import knex from "../knex"

const create = (user_id, group_id) => {
    return knex("usersToGroups").insert({ user_id, group_id })
}

export default create
