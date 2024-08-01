import { Injectable } from '@nestjs/common';
import { BaseRepositoryMySQLAdapter } from '../base/base-repository.adapter';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorDayModel } from '../models/doctor-day.model';
import { DoctorDay } from '../../application/entities/doctor-day.entity';
import { IDoctorDayRepository } from '../../domain/repositories/doctor-day.repository';

@Injectable()
export class DoctorDayRepository extends BaseRepositoryMySQLAdapter<DoctorDay, DoctorDayModel> implements IDoctorDayRepository {
  constructor(
    @InjectRepository(DoctorDayModel)
    private doctorModelRepository: Repository<DoctorDayModel>,
  ) {
    super(doctorModelRepository, DoctorDayModel);
  }
  mapToDomain(normalizedPersistenceObject: DoctorDayModel): DoctorDay {
    return normalizedPersistenceObject as unknown as DoctorDay;
  }
}
