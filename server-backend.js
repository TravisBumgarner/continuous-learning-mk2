const path = require('path')
const express = require('express')

import axios from 'axios'
import bodyParser from 'body-parser'
const Sentry = require('@sentry/node')

import * as middleware from './src/server/middleware'
import * as routes from './src/server/routes'
import { VALID_SUB_COMMANDS } from './src/server/constants'
import { logger } from './src/server/utilities'

const router = express.Router()

if (process.env.NODE_ENV === 'production') {
    Sentry.init({ dsn: 'https://07e183b574e24ba6ac7eb2a668e6736b@sentry.io/1317415' })
    // Sentry must me the first middleware
    router.use(Sentry.Handlers.requestHandler())
}

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.use(middleware.validateSlackRequest)

router.post('/', async (request, response, next) => {
    let subCommand = request.body.text.split(' ')[0].toLowerCase()

    logger({ request: request.body, type: logger.types.log, route: '/', message: 'slash command' })
    if (!VALID_SUB_COMMANDS.includes(subCommand)) {
        subCommand = 'help'
    }

    const responseBody = await routes[subCommand](request.body)
    response.json(responseBody)
})

router.get('/make_groups', (request, response, next) => {
    routes.make_groups().then(message => response.send(message))
})

router.get('/auth', async (request, response, next) => {
    const responseBody = await routes.auth(request)
    response.redirect('http://letspair.online/welcome')
})

if (process.env.NODE_ENV === 'production') {
    // The error handler must be before any other error middleware
    router.use(Sentry.Handlers.errorHandler())
}

module.exports = router
