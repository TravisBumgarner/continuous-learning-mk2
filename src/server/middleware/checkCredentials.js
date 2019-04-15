import config from '../config'
import { users } from '../db'

const checkCredentials = async (request, response, next) => {
    const { user_id } = request.body

    const user = await users.getById(user_id)
    const userExists = !!user.length

    request.body.user_exists = userExists
    request.body.user_is_admin = !!(userExists && user[0].is_admin)

    console.log(request.body)
    return next()
}

export default checkCredentials
