const TABLE_NAME = "users"

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("users").insert([
                { user_id: "u123", user_name: "bob", team_domain: "foo" },
                { user_id: "u456", user_name: "sally", team_domain: "foo" },
                { user_id: "u789", user_name: "steve", team_domain: "foo" },
                { user_id: "u999", user_name: "erin", team_domain: "foo" }
            ])
        })
}
