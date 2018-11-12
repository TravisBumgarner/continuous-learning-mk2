import { ROOT_COMMAND, ATTACHMENT_COLOR } from "../constants"
import { formatCommandExample } from "../utilities"

// To add commands, either append them to an existing sub group of commands or create a new sub group,
// and add a new section to HELP_COMMANDS

const GETTING_STARTED_COMMANDS = [
    {
        subCommand: "help",
        message: "Display this menu",
        example: formatCommandExample("help")
    },
    // {
    //     subCommand: "list_languages",
    //     message: "See list of available languages",
    //     example: formatCommandExample("list_languages")
    // },
    // {
    //     subCommand: "my_languages",
    //     message:
    //         "Specify the languages that you would like to work on, separated by commas. Rerun command to change languages",
    //     example: formatCommandExample("my_languages javascript,python")
    // },
    {
        subCommand: "register",
        message: "Enroll in Continuous Learning",
        example: formatCommandExample("register")
    },
    {
        subCommand: "status",
        message: "Check your exercise and partner for this week.",
        example: formatCommandExample("status")
    }
]

const MISC_COMMANDS = [
    {
        subCommand: "feedback",
        message: "Tell us what you think",
        example: formatCommandExample("feedback Getting there!")
    },
    {
        subCommand: "quit",
        message: "Disenroll in Continuous Learning",
        example: formatCommandExample("quit")
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
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: "Getting Started",
                        value: formatSectionContent(GETTING_STARTED_COMMANDS)
                    },
                    {
                        title: "Misc",
                        value: formatSectionContent(MISC_COMMANDS)
                    }
                ]
            }
        ]
    }
}

export default generateBody