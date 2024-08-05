import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRequest {
  @ApiProperty()
  number: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  customerName: string;
}
