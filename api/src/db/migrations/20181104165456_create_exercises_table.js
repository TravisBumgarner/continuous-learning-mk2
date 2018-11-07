const TABLE_NAME = "exercises"

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments("exercise_id")
        table.text("title")
        table.text("text")
        table.text("status")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
