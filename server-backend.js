const path = require('path')
const express = require('express')

import axios from 'axios'
import bodyParser from 'body-parser'
const Sentry = require('@sentry/node')

import * as middleware from './src/server/middleware'
import * as routes from './src/server/routes'
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
router.use(middleware.checkCredentials)

router.post('/', async (request, response, next) => {
    // const message = logger({ request: request.body, type: logger.types.log, route: '/', message: 'slash command' })

    const getSubCommandAndMessage = request => {
        var split_point = request.body.text.indexOf(' ')

        if (split_point === -1) {
            return [request.body.text, '']
        }
        return [request.body.text.slice(0, split_point), request.body.text.slice(split_point + 1)]
    }

    const [subCommand, message] = getSubCommandAndMessage(request)

    let jsonBody
    switch (subCommand) {
        case 'register':
        case '': {
            jsonBody = await routes.welcome(request.body)
            break
        }

        case 'feedback': {
            jsonBody = await routes.feedback(request.body)
            break
        }

        case 'remove': {
            jsonBody = await routes.remove(request.body)
            break
        }

        case 'pause': {
            jsonBody = await routes.pause(request.body)
            break
        }

        case 'resume': {
            jsonBody = await routes.resume(request.body)
            break
        }

        case 'my_exercise': {
            jsonBody = await routes.my_exercise(request.body)
            break
        }

        case 'make_groups': {
            jsonBody = await routes.make_groups(request.body)
            break
        }

        case 'help': {
            jsonBody = await routes.help(request.body)
            break
        }

        default: {
            jsonBody = await routes.help(request.body, subCommand)
            break
        }
    }

    response.json(jsonBody)
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
