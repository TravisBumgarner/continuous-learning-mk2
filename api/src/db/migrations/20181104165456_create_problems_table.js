exports.up = function(knex, Promise) {
    return knex.schema.createTable("problems", table => {
        table.increments()
        table.text("title")
        table.text("text")
        table.text("status")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("problems")
}
