import { Column, Entity } from 'typeorm';

import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';
import { IDoctor } from '../../domain/entities/doctor';
import { BaseModel } from '../base/base-model';
import { IAppointment } from '../../domain/entities/appointment';
import { IPatient } from '../../domain/entities/patient';
import { AppointmentStatus } from '../../domain/enums/appointment-status.enum';

@Entity({ name: 'appointments' })
export class AppointmentModel extends BaseModel implements IAppointment {
  doctor: IDoctor;
  patient: IPatient;

  @Column()
  @IsDate()
  @IsNotEmpty()
  dateStart: Date;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  status: AppointmentStatus;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  address: string;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  specialization: string;
}
