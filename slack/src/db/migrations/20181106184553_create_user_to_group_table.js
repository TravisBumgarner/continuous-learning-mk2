const TABLE_NAME = "users_to_groups"

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments("users_to_groups_id")
        table.text("user_id")
        table.text("group_id")
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
