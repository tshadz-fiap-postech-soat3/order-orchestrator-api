import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  providers: [],
  exports: [MessageModule],
})
export class InfraestructureModule {}
