import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderRequest } from '../../application/commands/order/create/create-order.request';
import { CreateOrderCommand } from '../../application/commands/order/create/create-order-command.service';
import { AuthPayloadDto } from '../../domain/model/auth.payload';
@ApiTags('Order')
@Controller('api/orders')
export class OrderController {
  constructor(private readonly createCommand: CreateOrderCommand) {}
  private readonly logger = console;
  private readonly objectName = OrderController.name;
  @Post()
  create(@Body() createDto: CreateOrderRequest) {
    const mockAuthPayload = { customerName: 'Alan Bonachella', customerId: '123' };
    const { customerName, customerId }: AuthPayloadDto = mockAuthPayload;
    this.logger.log(`${this.objectName} - Criando Pedindo`);
    return this.createCommand.handle({ ...createDto, customerName, customerId });
  }
}
