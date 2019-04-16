import knex from '../knex'

const updateStatus = (user_id, status) => {
    return knex('users')
        .where('user_id', user_id)
        .update('status', status)
}
export default updateStatus
