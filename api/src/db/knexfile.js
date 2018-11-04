// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        version: "7.2",
        connection: {
            host: "localhost",
            user: "travisbumgarner",
            password: "",
            database: "travisbumgarner"
        },
        migrations: {
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
        }
    }
}
