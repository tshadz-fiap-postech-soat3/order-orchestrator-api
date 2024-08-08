import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderMessageDto } from '../../../domain/contracts/create-order.message';
import { IPublisher } from '../../../domain/base/publisher.interface';
import * as console from 'console';

@Injectable()
export class CreateOrderPublisher implements IPublisher<CreateOrderMessageDto> {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}
  private readonly PATTERN = 'create-order';
  private readonly logger = console;
  private readonly objectName = CreateOrderPublisher.name;
  handle(message: CreateOrderMessageDto): void {
    this.logger.log(`${this.objectName} - Publish message `, message);
    this.client.emit(this.PATTERN, message);
  }
}
