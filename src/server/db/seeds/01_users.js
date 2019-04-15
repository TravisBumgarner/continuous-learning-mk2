const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([{ user_id: 'U7K6WR5C7', user_name: 'alan', team_name: 'foo' }])
        })
}
