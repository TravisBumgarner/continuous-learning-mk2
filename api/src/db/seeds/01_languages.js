exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("languages")
        .del()
        .then(function() {
            return knex("languages").insert([
                { id: 1, language: "python", status: "active" },
                { id: 2, language: "javascript", status: "active" },
                { id: 3, language: "c#", status: "active" },
                { id: 4, language: "java", status: "active" }
            ])
        })
}
