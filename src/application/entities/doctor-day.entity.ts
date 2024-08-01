import { EntityBase } from './base.entity';
import { IDoctorDay } from '../../domain/entities/doctor-day';
import { DaysOfWeek } from '../../domain/enums/day-of-week.enum';
import { Doctor } from './doctor.entity';

export class DoctorDay extends EntityBase implements IDoctorDay {
  constructor(dateStart: Date, dateEnd: Date, dayOfWeek: DaysOfWeek) {
    super();
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.dayOfWeek = dayOfWeek;
  }

  doctor: Doctor;
  dateEnd: Date;
  dateStart: Date;
  dayOfWeek: DaysOfWeek;

  addDoctor(doctor: Doctor): DoctorDay {
    if (!doctor) return this;

    return this;
  }
}
