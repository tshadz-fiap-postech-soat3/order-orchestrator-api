import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderRequest } from '../../application/commands/order/create/create-order.request';
import { CreateOrderCommand } from '../../application/commands/order/create/create-order-command.service';
@ApiTags('Order')
@Controller('api/orders')
export class OrderController {
  constructor(private readonly createCommand: CreateOrderCommand) {}
  private readonly logger = console;
  private readonly objectName = OrderController.name;
  @Post()
  create(@Body() createDto: CreateOrderRequest) {
    this.logger.log(`${this.objectName} - Criando Pedindo`);
    return this.createCommand.handle(createDto);
  }
}
