exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return Promise.all([knex("groups").del(), knex("users_to_groups").del()])
}
