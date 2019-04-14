const TABLE_NAME = "languages"

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments("language_id")
        table.text("language")
        table.text("status")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
