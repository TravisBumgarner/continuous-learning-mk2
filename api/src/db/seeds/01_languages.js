exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("languages")
        .del()
        .then(function() {
            return knex("languages").insert([
                { language_id: 1, language: "python", status: "active" },
                { language_id: 2, language: "javascript", status: "active" },
                { language_id: 3, language: "c#", status: "active" },
                { language_id: 4, language: "java", status: "active" }
            ])
        })
}
