import { Column, Entity } from 'typeorm';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseModel } from '../base/base-model';
import { IPatient } from '../../domain/entities/patient';
import { IClinicalRecord } from '../../domain/entities/clinical-record';

@Entity({ name: 'clinical_records' })
export class ClinicalRecordModel extends BaseModel implements IClinicalRecord {
  patient: IPatient;

  @Column({ length: 120 })
  @IsString()
  @IsNotEmpty()
  @Length(0, 120)
  url: string;
}
