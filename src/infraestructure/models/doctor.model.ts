import { Column, Entity, OneToMany } from 'typeorm';

import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IDoctor } from '../../domain/entities/doctor';
import { BaseModel } from '../base/base-model';
import { DoctorDayModel } from './doctor-day.model';

@Entity({ name: 'doctors' })
export class DoctorModel extends BaseModel implements IDoctor {
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  name: string;
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  crm: string;
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  specialization: string;
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  email: string;
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  password: string;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  address: string;

  @OneToMany(() => DoctorDayModel, (day) => day.doctor)
  days: DoctorDayModel[];
}
