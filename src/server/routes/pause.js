import { users } from '../db'
import { ATTACHMENT_COLOR } from '../constants'

const generateBody = async ({ user_id }) => {
    const wasPaused = await users.updateStatus(user_id, 'paused')
    return {
        attachments: [
            {
                color: ATTACHMENT_COLOR,
                fields: [
                    {
                        title: wasPaused ? 'Come back soon!' : 'Error',
                        value: wasPaused
                            ? `<@${user_id}> has been put on pause. You won't be paired next time.`
                            : `<@${user_id}> does not exist.`
                    }
                ]
            }
        ]
    }
}

export default generateBody
