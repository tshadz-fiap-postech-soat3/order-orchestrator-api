import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { CreateOrderPublisher } from '../../../../infraestructure/message/publishers/create-order.publisher';
import { CreateOrderMessageDto } from '../../../../domain/contracts/create-order.message';
import { CompleteOrderRequest } from './complete-order.request';
import { CompleteOrderResponse } from './complete-order.response';

@Injectable()
export class CompleteOrderCommand implements ICommand<CompleteOrderRequest, CompleteOrderResponse> {
  constructor(private readonly orderPublisher: CreateOrderPublisher) {}
  private readonly logger = console;
  private readonly objectName = CompleteOrderCommand.name;
  async handle(request: CompleteOrderRequest): Promise<void> {
    try {
      this.logger.log(`${this.objectName} - Enter to publish message `, request);
      await this.orderPublisher.handle(this.mapToMessage(request));
    } catch (e) {
      throw 'Erro ao salvar o doutor';
    }
  }
  private mapToMessage(request: CompleteOrderRequest): CreateOrderMessageDto {
    return null;
    // return {
    //   number: request.number,
    //   price: request.price,
    //   customerName: request.customerName,
    // };
  }
}
