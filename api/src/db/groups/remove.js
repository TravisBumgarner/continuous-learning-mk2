import knex from "../knex"

const remove = () => {
    return knex("groups").del()
}

export default remove
