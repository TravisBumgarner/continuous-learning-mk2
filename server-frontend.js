const path = require('path')
const express = require('express')
const router = express.Router()

router.use('/static', express.static(path.resolve(__dirname + '/dist')))

router.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, './dist', 'index.html'))
})

module.exports = router
