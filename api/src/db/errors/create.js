import knex from "../knex"

const create = ({ user_id, user_name, text, command }) => {
    console.log("I run")
    return knex("errors").insert({ user_id, user_name, text, command })
}

export default create
