import  {
  RemoteMessageAndSampleCycleMaker2k
} from '../article/RemoteMessageAndSampleCycleMaker2k.ts'

export const logRemoteMessage = (message: RemoteMessageAndSampleCycleMaker2k) => {
  console.log(message.formatMessage())
}
