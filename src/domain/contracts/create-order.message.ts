import { ApiProperty } from '@nestjs/swagger';

export interface CreateOrderMessageDto {
  @ApiProperty({ example: 'Fulano da Silva' })
  customerName: string;

  @ApiProperty({ example: 'cust-1' })
  customerId: string;

  @ApiProperty()
  items: CreateOrderItemDto[];
}

export class CreateOrderItemDto {
  @ApiProperty({ example: 'prod-1' })
  productId: string;

  @ApiProperty({ example: 2 })
  quantity: number;
}
