import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  specialization: string;
  @ApiProperty()
  crm: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  address: string;
}
