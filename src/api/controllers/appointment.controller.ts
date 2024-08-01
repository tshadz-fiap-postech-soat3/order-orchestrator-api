import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAppointmentRequest } from '../../application/commands/appointments/create/create-appointment.request';
import { CreateAppointmentCommand } from '../../application/commands/appointments/create/create-appointment-command.service';
@ApiTags('Appointments')
@Controller('api/appointments')
export class AppointmentController {
  constructor(private readonly createCommand: CreateAppointmentCommand) {}
  private readonly logger = console;
  private readonly objectName = AppointmentController.name;
  @Post()
  create(@Body() createDto: CreateAppointmentRequest) {
    this.logger.log(`${this.objectName} - Criando Appointment`);
    return this.createCommand.handle(createDto);
  }
}
