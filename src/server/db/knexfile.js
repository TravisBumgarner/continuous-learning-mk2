const path = require('path')
const config = require('../config')

const { host, user, password, database } = config.db
module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, './db.sqlite')
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    },
    production: {
        client: 'pg',
        version: '7.2',
        connection: {
            host,
            user,
            password,
            database
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }
}
