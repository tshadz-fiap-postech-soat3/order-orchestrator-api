import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateOrderMessageDto } from '../../../domain/contracts/create-order.message';
import { IPublisher } from '../../../domain/base/publisher.interface';

@Injectable()
export class ProcessPaymentPublisher implements IPublisher<CreateOrderMessageDto> {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}
  private readonly PATTERN = 'process-payment';
  private readonly logger = console;
  private readonly objectName = ProcessPaymentPublisher.name;
  handle(message: CreateOrderMessageDto): void {
    this.logger.log(`${this.objectName} - Publish message `, message);
    this.client.emit(this.PATTERN, message);
  }
}
