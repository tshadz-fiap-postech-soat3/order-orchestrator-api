import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { OrderController } from './controllers/order.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [OrderController],
  providers: [],
})
export class ApiModule {}
