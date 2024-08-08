import { ApiProperty } from '@nestjs/swagger';

export class ConfirmOrderRequest {
  @ApiProperty()
  orderNumber: number;
}
