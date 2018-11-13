const path = require('path')
const express = require('express')

const app = express()

app.use('/static', express.static(path.resolve(__dirname + '/dist')))
app.get('/ok', (request, response, next) => response.send('Service is running'))
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './dist', 'index.html'))
})

const port = 3000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

module.exports = app
