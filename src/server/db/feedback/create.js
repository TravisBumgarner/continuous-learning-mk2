import knex from '../knex'

const create = ({ user_id, user_name, text }) => {
    return knex('feedback').insert({ user_id, user_name, text })
}

export default create
