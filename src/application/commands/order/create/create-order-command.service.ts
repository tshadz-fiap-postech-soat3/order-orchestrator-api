import { CreateOrderRequest, CreateOrderRequestDto } from './create-order.request';
import { CreateOrderResponse } from './create-order.response';
import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { CreateOrderPublisher } from '../../../../infraestructure/message/publishers/create-order.publisher';
import { CreateOrderItemMessageDto, CreateOrderMessageDto } from '../../../../domain/contracts/create-order.message';

@Injectable()
export class CreateOrderCommand implements ICommand<CreateOrderRequest, CreateOrderResponse> {
  constructor(private readonly orderPublisher: CreateOrderPublisher) {}
  private readonly logger = console;
  private readonly objectName = CreateOrderCommand.name;
  async handle(request: CreateOrderRequest): Promise<void> {
    try {
      this.logger.log(`${this.objectName} - Enter to publish message `, request);
      await this.orderPublisher.handle(this.mapToMessage(request));
    } catch (e) {
      throw 'Erro ao salvar o doutor';
    }
  }
  private mapToMessage(request: CreateOrderRequest): CreateOrderMessageDto {
    return {
      customerId: request.customerId,
      customerName: request.customerName,
      items: request.items.map(this.mapCreateOrderItemMessage),
    };
  }

  private mapCreateOrderItemMessage(orderItemRequest: CreateOrderRequestDto): CreateOrderItemMessageDto {
    return {
      productId: orderItemRequest.productId,
      quantity: orderItemRequest.quantity,
    };
  }
}
