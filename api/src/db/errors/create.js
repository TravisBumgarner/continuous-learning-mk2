import knex from "../knex"

const create = ({ user_id, user_name, text, command, error }) => {
    return knex("errors").insert({ user_id, user_name, text, command, error })
}

export default create
