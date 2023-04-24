import { Logger, Module } from '@nestjs/common';
import { OzClientService } from './oz-client.service';

@Module({
  providers: [OzClientService],
  exports: [OzClientService],
})
export class OzClientModule {
  print() {
    Logger.log('Hello Oz Client');
  }
}
