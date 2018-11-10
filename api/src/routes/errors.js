import { languages } from "../db"

const generateBody = async ({ user_id, user_name, text, command, error }) => {
    return errors
        .create({ user_id, user_name, text, command, error })
        .then(() => response.send("Invalid command. Try running `/pairme help` to see available options."))
}

export default generateBody
