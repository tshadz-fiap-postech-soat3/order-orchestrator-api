import { Column, Entity } from 'typeorm';

import { IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseModel } from '../base/base-model';
import { IPatient } from '../../domain/entities/patient';

@Entity({ name: 'patients' })
export class PatientModel extends BaseModel implements IPatient {
  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  name: string;
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
}
