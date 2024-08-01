import { Injectable } from '@nestjs/common';
import { BaseRepositoryMySQLAdapter } from '../base/base-repository.adapter';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientModel } from '../models/patient.model';
import { IAppointmentRepository } from '../../domain/repositories/appointment.repository';
import { AppointmentModel } from '../models/appointment.model';
import { Appointment } from '../../application/entities/appointment.entity';

@Injectable()
export class AppointmentRepository
  extends BaseRepositoryMySQLAdapter<Appointment, AppointmentModel>
  implements IAppointmentRepository
{
  constructor(
    @InjectRepository(PatientModel)
    private doctorModelRepository: Repository<AppointmentModel>,
  ) {
    super(doctorModelRepository, AppointmentModel);
  }
  mapToDomain(normalizedPersistenceObject: AppointmentModel): Appointment {
    return normalizedPersistenceObject as unknown as Appointment;
  }
}
