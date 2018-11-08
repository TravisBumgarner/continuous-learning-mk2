const TABLE_NAME = "errors"

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments("error_id")
        table.text("user_id")
        table.text("user_name")
        table.text("text")
        table.text("command")
        table.text("error")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
