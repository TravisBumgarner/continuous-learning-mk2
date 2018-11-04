exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
        table.text("user_id").primary()
        table.text("user_name")
        table.text("team_domain")
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users")
}