import { languages } from "../db"

const generateBody = async ({ user_id, user_name, team_domain }) => {
    const response = await languages.getActive()
    const availableLanguages = response.map(row => row.language).join(", ")
    return `Available languages are ${availableLanguages}`
}

export default generateBody
