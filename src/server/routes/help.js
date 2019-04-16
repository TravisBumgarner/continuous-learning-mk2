import { ROOT_COMMAND, ATTACHMENT_COLOR } from '../constants'
import { formatCommandExample } from '../utilities'
import { format } from 'url'

const getGeneralCommands = ({ user_is_intern, user_status }) => {
    const REGISTER = {
        subCommand: 'register',
        message: 'Register account',
        example: formatCommandExample('register')
    }

    const PAUSE = {
        subCommand: 'pause',
        message: 'Sit out for next kata',
        example: formatCommandExample('pause')
    }

    const RESUME = {
        subCommand: 'resume',
        message: 'Sit back in for next kata',
        example: formatCommandExample('resume')
    }

    const REMOVE = {
        subCommand: 'remove',
        message: 'Remove yourself from all future katas',
        example: formatCommandExample('remove')
    }

    const commands = [
        {
            subCommand: 'help',
            message: 'Display this menu',
            example: formatCommandExample('help')
        },
        {
            subCommand: 'my_exercise',
            message: 'Check your exercise and partner for this week.',
            example: formatCommandExample('my_exercise')
        },
        {
            subCommand: 'feedback',
            message: 'Tell us what you think',
            example: formatCommandExample('feedback Getting there!')
        }
    ]

    if (!user_status) {
        commands.push(REGISTER)
    }

    if (!user_is_intern) {
        if (user_status === 'active') {
            commands.push(PAUSE)
            commands.push(REMOVE)
        }

        if (user_status === 'paused') {
            commands.push(RESUME)
            commands.push(REMOVE)
        }

        if (user_status === 'removed') {
            commands.push(RESUME)
        }
    }

    return {
        title: 'General',
        value: formatSectionContent(commands)
    }
}

const getAdminCommands = ({ user_is_admin }) => {
    return user_is_admin
        ? {
              title: 'Admin',
              value: formatSectionContent([
                  {
                      subCommand: 'make_groups',
                      message: 'Create new groups',
                      example: formatCommandExample('make_groups')
                  },
                  {
                      subCommand: 'set_next',
                      message: 'Set next kata',
                      example: formatCommandExample('set_next')
                  },
                  {
                      subCommand: 'get_next',
                      message: 'Get next kata',
                      example: formatCommandExample('get_next')
                  }
              ])
          }
        : {}
}

const formatSectionContent = section => {
    return section
        .map(({ subCommand, message, example }) => {
            return `\`${subCommand}\` - ${message} (ex: ${example})`
        })
        .join('\n')
}

const generateBody = (requestBody, subCommand) => {
    const { user_is_admin, user_status, user_is_intern } = requestBody

    if (subCommand) {
        fields.push({
            title: 'Whoops!',
            value: `${formatCommandExample(subCommand)} is not a valid command. Check out the available commands below.`
        })
    }

    const fields = [getGeneralCommands({ user_status, user_is_intern }), getAdminCommands(user_is_admin)]

    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields
            }
        ]
    }
}

export default generateBody
