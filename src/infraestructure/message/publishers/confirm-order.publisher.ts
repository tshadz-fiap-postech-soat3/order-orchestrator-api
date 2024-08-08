import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPublisher } from '../../../domain/base/publisher.interface';
import * as console from 'console';
import { ConfirmOrderMessageDto } from '../../../domain/contracts/confirm-order.message';

@Injectable()
export class ConfirmOrderPublisher implements IPublisher<ConfirmOrderMessageDto> {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}
  private readonly PATTERN = 'complete-order';
  private readonly logger = console;
  private readonly objectName = ConfirmOrderPublisher.name;
  handle(message: ConfirmOrderMessageDto): void {
    this.logger.log(`${this.objectName} - Publish message `, message);
    this.client.emit(this.PATTERN, message);
  }
}
