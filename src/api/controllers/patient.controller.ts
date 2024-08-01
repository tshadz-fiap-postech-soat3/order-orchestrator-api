import { Controller, Post, Body } from '@nestjs/common';
import { CreateDoctorRequest } from '../../application/commands/doctors/create/create-doctor.request';
import { CreateDoctorCommand } from '../../application/commands/doctors/create/create-doctor.command';
import { ApiTags } from '@nestjs/swagger';
import { CreateDoctorScheduleRequest } from '../../application/commands/doctors/create-schedule/create-doctor-schedule.request';
import { CreateDoctorScheduleCommand } from '../../application/commands/doctors/create-schedule/create-doctor-schedule.command';
import { CreatePatientCommand } from '../../application/commands/patients/create/create-patient.command';
import { CreatePatientRequest } from '../../application/commands/patients/create/create-patient.request';
@ApiTags('Patients')
@Controller('api/patients')
export class PatientController {
  constructor(private readonly createPatientCommand: CreatePatientCommand) {}
  private readonly logger = console;
  private readonly objectName = PatientController.name;
  @Post()
  create(@Body() createDto: CreatePatientRequest) {
    this.logger.log(`${this.objectName} - Criando Paciente ${createDto.name}`);
    return this.createPatientCommand.handle(createDto);
  }
}
