import knex from '../knex'

const getActive = () => {
    return knex
        .select()
        .from('users')
        .where('status', 'active')
}

export default getActive
