const path = require('path')
const express = require('express')
const app = express()

const backendRoutes = require('./server-backend')
const frontendRoutes = require('./server-frontend')

app.get('/ok', (request, response) => response.send('Server running.'))
app.use('/api', backendRoutes)
app.use('/', frontendRoutes)

const port = 5000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

module.exports = app
