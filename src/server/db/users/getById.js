import knex from '../knex'

const getById = user_id => {
    console.log('userid', user_id)
    return knex
        .select()
        .from('users')
        .where('user_id', user_id)
}

export default getById
