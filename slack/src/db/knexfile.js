const path = require("path")

const config = require("../config")

const { host, user, password, database } = config.db

module.exports = {
    development: {
        client: "pg",
        version: "7.2",
        connection: {
            host,
            user,
            password,
            database
        },
        migrations: {
            directory: path.resolve(__dirname, "migrations")
        },
        seeds: {
            directory: path.resolve(__dirname, "seeds")
        }
    }
}
