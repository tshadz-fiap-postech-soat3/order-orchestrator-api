import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateOrderMessageDto } from '../../domain/contracts/create-order.message';

@Injectable()
export class CreateOrderPublisher {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}
  private readonly PATTERN = 'create-order';
  private readonly logger = console;
  private readonly objectName = CreateOrderPublisher.name;
  sendMessage(message: CreateOrderMessageDto) {
    this.logger.log(`${this.objectName} - Publish message `, message);
    return this.client.emit(this.PATTERN, message);
  }
}
