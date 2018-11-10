import { ROOT_COMMAND } from "../constants"

import makeUrl from "./makeUrl"
import sendUserMessage from "./sendUserMessage"

const formatCommandExample = command => `\`${ROOT_COMMAND} ${command}\``

export { makeUrl, sendUserMessage, formatCommandExample }
