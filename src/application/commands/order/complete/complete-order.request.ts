import { ApiProperty } from '@nestjs/swagger';

export class CompleteOrderRequest {
  @ApiProperty()
  orderNumber: number;
}
