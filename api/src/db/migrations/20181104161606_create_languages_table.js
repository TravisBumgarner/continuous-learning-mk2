exports.up = function(knex, Promise) {
    return knex.schema.createTable("languages", table => {
        table.increments()
        table.text("language")
        table.text("status")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("languages")
}
