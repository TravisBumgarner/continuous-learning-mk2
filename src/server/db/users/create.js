import knex from "../knex"

const create = ({ user_id, user_name, team_name, team_id, access_token }) => {
    return knex("users").insert({ user_id, user_name, team_name, team_id, access_token })
}

export default create
