import { logs } from "../db"

const logger = async ({ request, type, message, route }) => {
    console.log(process.env.NODE_ENV)

    if (process.env.NODE_ENV === "development") {
        console.log(request, type, message, route)
    } else {
        return logs.create({ request, type, message, route })
    }
}

logger.types = {
    error: "error",
    invalidAuth: "invalid_auth",
    log: "general"
}

export default logger
