import { DaysOfWeek } from '../enums/day-of-week.enum';
import { IEntityBase } from '../base/base.entity.interface';

export interface IDoctorDay extends IEntityBase {
  dayOfWeek: DaysOfWeek;
  dateStart: Date;
  dateEnd: Date;
}
