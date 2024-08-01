import { Column, Entity, ManyToOne } from 'typeorm';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseModel } from '../base/base-model';
import { IDoctorDay } from '../../domain/entities/doctor-day';
import { DaysOfWeek } from '../../domain/enums/day-of-week.enum';
import { IDoctor } from '../../domain/entities/doctor';
import { Doctor } from '../../application/entities/doctor.entity';
import { DoctorModel } from './doctor.model';

@Entity({ name: 'doctor_days' })
export class DoctorDayModel extends BaseModel implements IDoctorDay {
  @ManyToOne(() => DoctorModel, (doctor) => doctor.days)
  doctor: DoctorModel;

  @Column()
  @IsDate()
  dateEnd: Date;
  @Column()
  @IsDate()
  dateStart: Date;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  dayOfWeek: DaysOfWeek;
}
