import { Injectable } from '@nestjs/common';
import { Doctor } from '../../application/entities/doctor.entity';
import { IDoctorRepository } from '../../domain/repositories/doctor.repository';
import { BaseRepositoryMySQLAdapter } from '../base/base-repository.adapter';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientModel } from '../models/patient.model';
import { Patient } from '../../application/entities/patient.entity';
import { IPatientRepository } from '../../domain/repositories/patient.repository';

@Injectable()
export class PatientRepository
  extends BaseRepositoryMySQLAdapter<Patient, PatientModel>
  implements IPatientRepository
{
  constructor(
    @InjectRepository(PatientModel)
    private doctorModelRepository: Repository<PatientModel>,
  ) {
    super(doctorModelRepository, PatientModel);
  }
  mapToDomain(normalizedPersistenceObject: PatientModel): Doctor {
    return normalizedPersistenceObject as unknown as Doctor;
  }
}
