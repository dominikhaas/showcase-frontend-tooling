import type { MessageObject } from '../article/SampleCycleObject.ts'

export const logArticle = (message: MessageObject) => {
  console.log(message.message)
}
