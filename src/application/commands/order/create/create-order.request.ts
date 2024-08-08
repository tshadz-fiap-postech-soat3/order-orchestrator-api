import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRequest {
  customerName?: string;
  customerId?: string;
  @ApiProperty()
  items: CreateOrderRequestDto[];
}

export class CreateOrderRequestDto {
  productId: string;
  quantity: number;
}
