import { Module } from '@nestjs/common';
import { CreateDoctorCommand } from './commands/doctors/create/create-doctor.command';
import { InfraestructureModule } from '../infraestructure/infraestructure.module';
import { CreateDoctorScheduleCommand } from './commands/doctors/create-schedule/create-doctor-schedule.command';
import { CreatePatientCommand } from './commands/patients/create/create-patient.command';
import { CreateAppointmentCommand } from './commands/appointments/create/create-appointment-command.service';

@Module({
  imports: [InfraestructureModule],
  controllers: [],
  providers: [CreateDoctorCommand, CreateDoctorScheduleCommand, CreatePatientCommand, CreateAppointmentCommand],
  exports: [CreateDoctorCommand, CreateDoctorScheduleCommand, CreatePatientCommand, CreateAppointmentCommand],
})
export class ApplicationModule {}
