import { Module } from '@nestjs/common';
import { DoctorController } from './controllers/doctor.controller';
import { ApplicationModule } from '../application/application.module';
import { PatientController } from './controllers/patient.controller';
import { AppointmentController } from './controllers/appointment.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [DoctorController, PatientController, AppointmentController],
  providers: [],
})
export class ApiModule {}
