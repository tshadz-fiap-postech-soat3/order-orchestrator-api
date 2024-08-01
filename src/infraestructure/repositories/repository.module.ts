import { Module } from '@nestjs/common';
import { DoctorRepository } from './doctor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModel } from '../models/doctor.model';
import { DoctorDayRepository } from './doctor-day-repository.service';
import { PatientRepository } from './patient.repository';
import { AppointmentRepository } from './appointment.repository';
import { DoctorDayModel } from '../models/doctor-day.model';
import { PatientModel } from '../models/patient.model';
import { AppointmentModel } from '../models/appointment.model';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorModel, DoctorDayModel, PatientModel, AppointmentModel])],
  providers: [DoctorRepository, DoctorDayRepository, PatientRepository, AppointmentRepository],
  exports: [DoctorRepository, DoctorDayRepository, PatientRepository, AppointmentRepository],
})
export class RepositoryModule {}
