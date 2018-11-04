import knex from "../knex"

const create = ({ user_id, user_name, team_domain }) => {
    return knex("users").insert({ user_id, user_name, team_domain })
}

export default create
