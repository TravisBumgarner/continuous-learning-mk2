import knex from "../knex"

const remove = () => {
    return knex("users_to_groups").del()
}

export default remove
