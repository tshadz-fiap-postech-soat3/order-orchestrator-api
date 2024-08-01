import { Injectable } from '@nestjs/common';
import { Doctor } from '../../application/entities/doctor.entity';
import { IDoctorRepository } from '../../domain/repositories/doctor.repository';
import { BaseRepositoryMySQLAdapter } from '../base/base-repository.adapter';
import { DoctorModel } from '../models/doctor.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoctorRepository extends BaseRepositoryMySQLAdapter<Doctor, DoctorModel> implements IDoctorRepository {
  constructor(
    @InjectRepository(DoctorModel)
    private doctorModelRepository: Repository<DoctorModel>,
  ) {
    super(doctorModelRepository, DoctorModel);
  }
  mapToDomain(normalizedPersistenceObject: DoctorModel): Doctor {
    const doctor = new Doctor();
    doctor.setName(normalizedPersistenceObject.name);
    doctor.setSpecialization(normalizedPersistenceObject.specialization);
    doctor.setCrm(normalizedPersistenceObject.crm);
    doctor.setAddress(normalizedPersistenceObject.address);
    doctor.setEmail(normalizedPersistenceObject.email);

    return doctor;
  }
}
