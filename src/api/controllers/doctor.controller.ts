import { Controller, Post, Body } from '@nestjs/common';
import { CreateDoctorRequest } from '../../application/commands/doctors/create/create-doctor.request';
import { CreateDoctorCommand } from '../../application/commands/doctors/create/create-doctor.command';
import { ApiTags } from '@nestjs/swagger';
import { CreateDoctorScheduleRequest } from '../../application/commands/doctors/create-schedule/create-doctor-schedule.request';
import { CreateDoctorScheduleCommand } from '../../application/commands/doctors/create-schedule/create-doctor-schedule.command';
@ApiTags('Doctors')
@Controller('api/doctors')
export class DoctorController {
  constructor(
    private readonly createDoctorCommand: CreateDoctorCommand,
    private readonly createDoctorScheduleCommand: CreateDoctorScheduleCommand,
  ) {}
  private readonly logger = console;
  private readonly objectName = DoctorController.name;
  @Post()
  create(@Body() createDoctorDto: CreateDoctorRequest) {
    this.logger.log(`${this.objectName} - Criando Doutor ${createDoctorDto.name}`);
    return this.createDoctorCommand.handle(createDoctorDto);
  }

  @Post(`schedule`)
  createSchedule(@Body() createScheduleDto: CreateDoctorScheduleRequest) {
    this.logger.log(`${this.objectName} - Criando Agenda do Doutor`);
    return this.createDoctorScheduleCommand.handle(createScheduleDto);
  }
}
