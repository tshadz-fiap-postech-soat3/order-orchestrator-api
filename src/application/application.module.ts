import { Module } from '@nestjs/common';
import { InfraestructureModule } from '../infraestructure/infraestructure.module';
import { CreateOrderCommand } from './commands/order/create/create-order-command.service';

@Module({
  imports: [InfraestructureModule],
  controllers: [],
  providers: [CreateOrderCommand],
  exports: [CreateOrderCommand],
})
export class ApplicationModule {}
