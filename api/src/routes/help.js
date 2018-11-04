import { ROOT_COMMAND } from "../constants"

const formatExample = command => `\`${ROOT_COMMAND} ${command}\``

// To add commands, either append them to an existing sub group of commands or create a new sub group,
// and add a new section to HELP_COMMANDS

const GETTING_STARTED_COMMANDS = [
    {
        subCommand: "help",
        message: "Display this menu",
        example: formatExample("help")
    },
    {
        subCommand: "list_languages",
        message: "See list of available languages",
        example: formatExample("list_languages")
    },
    {
        subCommand: "my_languages",
        message:
            "Specify the languages that you would like to work on, separated by commas. Rerun command to change languages",
        example: formatExample("my_languages javascript,python")
    },
    {
        subCommand: "status",
        message: "Check your language, partner, due date, and exercise for this week.",
        example: formatExample("status")
    },
    {
        subCommand: "subscribe",
        message: "Enroll in Continuous Learning",
        example: formatExample("subscribe")
    }
]

const MISC_COMMANDS = [
    {
        subCommand: "feedback",
        message: "Tell us what you think",
        example: formatExample("feedback Getting there!")
    },
    {
        subCommand: "unsubscribe",
        message: "Disenroll in Continuous Learning",
        example: formatExample("unsubscribe")
    }
]

const HELP_COMMANDS = [
    {
        section: "Getting Started",
        content: GETTING_STARTED_COMMANDS
    },
    {
        section: "Misc",
        content: MISC_COMMANDS
    }
]

const formatSectionContent = section => {
    return section
        .map(({ subCommand, message, example }) => {
            return `\`${subCommand}\` - ${message} (ex: ${example})`
        })
        .join("\n")
}

const generateBody = () => {
    const body = HELP_COMMANDS.map(({ section, content }) => {
        return `*${section}*\n${formatSectionContent(content)}`
    }).join("\n\n")
    return {
        text: body
    }
}

export default generateBody
