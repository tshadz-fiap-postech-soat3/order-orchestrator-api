import { Module } from '@nestjs/common';
import { CreateOrderPublisher } from './publishers/create-order.publisher';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'orders-queue',
        },
      },
    ]),
  ],
  providers: [CreateOrderPublisher],
  exports: [CreateOrderPublisher],
})
export class MessageModule {}
