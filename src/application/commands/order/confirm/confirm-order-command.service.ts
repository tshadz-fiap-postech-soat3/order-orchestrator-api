import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { CreateOrderPublisher } from '../../../../infraestructure/message/publishers/create-order.publisher';
import { CreateOrderMessageDto } from '../../../../domain/contracts/create-order.message';
import { ConfirmOrderRequest } from './confirm-order.request';
import { ConfirmOrderResponse } from './confirm-order.response';

@Injectable()
export class ConfirmOrderCommand implements ICommand<ConfirmOrderRequest, ConfirmOrderResponse> {
  constructor(private readonly orderPublisher: CreateOrderPublisher) {}
  private readonly logger = console;
  private readonly objectName = ConfirmOrderCommand.name;
  async handle(request: ConfirmOrderRequest): Promise<void> {
    try {
      this.logger.log(`${this.objectName} - Enter to publish message `, request);
      await this.orderPublisher.handle(this.mapToMessage(request));
    } catch (e) {
      throw 'Erro ao salvar o doutor';
    }
  }
  private mapToMessage(request: ConfirmOrderRequest): CreateOrderMessageDto {
    return null;
    // return {
    //   number: request.number,
    //   price: request.price,
    //   customerName: request.customerName,
    // };
  }
}
