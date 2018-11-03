const ROOT_COMMAND = "/pairme"
const HELP_COMMANDS = [
    ["help", "Display this menu"],
    ["subscribe", "Join Us"],
    ["unsubscribe", "Leave Us"],
    ["update", "Update"]
]

const generateBody = ({}) => {
    const body = HELP_COMMANDS.map(([subCommand, message]) => {
        return `\`${ROOT_COMMAND} ${subCommand}\` - ${message}`
    }).join("\n")
    
    return {
        text: body
    }
}

export default generateBody
