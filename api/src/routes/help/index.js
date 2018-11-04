const formatExample = command => `\`/pairme ${command}\``

// To add commands, either append them to an existing sub group of commands or create a new sub group,
// and add a new section to HELP_COMMANDS

const GETTING_STARTED_COMMANDS = [
    {
        subCommand: "help",
        message: "Display this menu",
        example: ""
    },
    {
        subCommand: "subscribe",
        message: "Enroll in Continuous Learning",
        example: formatExample("subscribe")
    },
    {
        subCommand: "unsubscribe",
        message: "Disenroll in Continuous Learning",
        example: formatExample("unsubscribe")
    },
    {
        subCommand: "my_languages",
        message:
            "Specify the languages that you would like to work on, separated by commas. Rerun command to change languages",
        example: formatExample("my_languages javascript,python")
    },
    {
        subCommand: "available_languages",
        message: "See available languages",
        example: formatExample("available_languages")
    }
]

const HELP_COMMANDS = [
    {
        section: "Getting Started",
        content: GETTING_STARTED_COMMANDS
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
    }).join("\n")
    return {
        text: body
    }
}

export default generateBody
