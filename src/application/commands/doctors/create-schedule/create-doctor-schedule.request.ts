import { DaysOfWeek } from '../../../../domain/enums/day-of-week.enum';
import { ApiProperty } from '@nestjs/swagger';

export class DoctorDayDto {
  @ApiProperty({ enum: DaysOfWeek })
  dayOfWeek: DaysOfWeek;
  @ApiProperty()
  hourStart: Date;
  @ApiProperty()
  hourEnd: Date;
}

export class CreateDoctorScheduleRequest {
  @ApiProperty()
  doctorId: string;
  @ApiProperty({ type: [DoctorDayDto] })
  days: DoctorDayDto[];
}
