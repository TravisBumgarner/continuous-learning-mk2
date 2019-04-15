import { ROOT_COMMAND, ATTACHMENT_COLOR } from '../constants'
import { formatCommandExample } from '../utilities'

// To add commands, either append them to an existing sub group of commands or create a new sub group,
// and add a new section to HELP_COMMANDS

const GETTING_STARTED_COMMANDS = [
    {
        subCommand: 'register',
        message: 'Register account',
        example: formatCommandExample('register')
    },
    {
        subCommand: 'help',
        message: 'Display this menu',
        example: formatCommandExample('help')
    },
    {
        subCommand: 'status',
        message: 'Check your exercise and partner for this week.',
        example: formatCommandExample('status')
    }
]

const MISC_COMMANDS = [
    {
        subCommand: 'feedback',
        message: 'Tell us what you think',
        example: formatCommandExample('feedback Getting there!')
    },
    {
        subCommand: 'quit',
        message: 'Disenroll in Continuous Learning',
        example: formatCommandExample('quit')
    }
]

const formatSectionContent = section => {
    return section
        .map(({ subCommand, message, example }) => {
            return `\`${subCommand}\` - ${message} (ex: ${example})`
        })
        .join('\n')
}

const generateBody = subCommand => {
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: 'Whoops!',
                        value: `${formatCommandExample(
                            subCommand
                        )} is not a valid command. Check out the available commands below.`
                    },
                    {
                        title: 'Getting Started',
                        value: formatSectionContent(GETTING_STARTED_COMMANDS)
                    },
                    {
                        title: 'Misc',
                        value: formatSectionContent(MISC_COMMANDS)
                    }
                ]
            }
        ]
    }
}

export default generateBody
