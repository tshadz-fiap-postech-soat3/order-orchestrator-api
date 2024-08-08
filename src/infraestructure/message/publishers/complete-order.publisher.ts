import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPublisher } from '../../../domain/base/publisher.interface';
import * as console from 'console';
import { CompleteOrderMessageDto } from '../../../domain/contracts/complete-order.message';

@Injectable()
export class CompleteOrderPublisher implements IPublisher<CompleteOrderMessageDto> {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}
  private readonly PATTERN = 'complete-order';
  private readonly logger = console;
  private readonly objectName = CompleteOrderPublisher.name;
  handle(message: CompleteOrderMessageDto): void {
    this.logger.log(`${this.objectName} - Publish message `, message);
    this.client.emit(this.PATTERN, message);
  }
}
