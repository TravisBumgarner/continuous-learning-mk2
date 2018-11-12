import knex from "../knex"

const create = ({ request, type, message }) => {
    return knex("logs").insert({ request, type, message })
}

export default create
