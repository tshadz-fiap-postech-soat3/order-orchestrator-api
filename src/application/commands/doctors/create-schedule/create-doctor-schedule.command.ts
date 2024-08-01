import { CreateDoctorScheduleRequest } from './create-doctor-schedule.request';
import { CreateDoctorScheduleResponse } from './create-doctor-schedule.response';
import { Doctor } from '../../../entities/doctor.entity';
import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../../infraestructure/repositories/doctor.repository';
import { DoctorDayRepository } from '../../../../infraestructure/repositories/doctor-day-repository.service';
import { DoctorDay } from '../../../entities/doctor-day.entity';

@Injectable()
export class CreateDoctorScheduleCommand implements ICommand<CreateDoctorScheduleRequest, CreateDoctorScheduleResponse> {
  constructor(
    private readonly doctorRepository: DoctorRepository,
    private readonly doctorDayRepository: DoctorDayRepository,
  ) {}
  private readonly logger = console;
  private readonly objectName = CreateDoctorScheduleCommand.name;
  async handle(request: CreateDoctorScheduleRequest): Promise<CreateDoctorScheduleResponse> {
    try {
      const doctor = await this.doctorRepository.get(request.doctorId);
      this.logger.log(`${this.objectName} - Criando agenda do médico ${doctor.name}`);
      await this.saveDoctorSchedule(doctor.addDays(request.days.map((day) => new DoctorDay(day.hourStart, day.hourEnd, day.dayOfWeek).addDoctor(doctor))));
    } catch (e) {
      this.logger.log(`[${this.objectName}] - Catch Error `, e);
      throw 'Erro ao salvar a agenda do doutor';
    }
  }

  private async saveDoctorSchedule(doctor: Doctor): Promise<void> {
    this.logger.log(`[${this.objectName}] - Salvando agenda `, doctor.days);
    const schedulePromises = doctor.days.map((day) => this.doctorDayRepository.create(day, null));
    await Promise.all(schedulePromises);
  }
}
