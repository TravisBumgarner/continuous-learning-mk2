import knex from "../knex"

const remove = () => {
    return knex("pairs").del()
}

export default remove
