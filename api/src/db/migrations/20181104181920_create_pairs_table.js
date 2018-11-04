const TABLE_NAME = "pairs"

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments()
        table.text("user_id_left")
        table.text("user_id_right")
        table.text("exercise")
        table.timestamp("due_date").defaultTo(knex.fn.now())
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
