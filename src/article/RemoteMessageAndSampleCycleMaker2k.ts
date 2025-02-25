import { logRemoteMessage } from '../clientold/SampleCycleMaker2k.ts'

export class RemoteMessageAndSampleCycleMaker2k {
  constructor(public message: string) {
  }

  public log(): void {
    logRemoteMessage(this);
  }

   public formatMessage(): string {
      return "#todo " + this.message;
   }
}
