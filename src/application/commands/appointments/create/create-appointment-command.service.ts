import { CreateAppointmentRequest } from './create-appointment.request';
import { CreateAppointmentResponse } from './create-appointment.response';
import { Doctor } from '../../../entities/doctor.entity';
import { IDoctorRepository } from '../../../../domain/repositories/doctor.repository';
import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../../infraestructure/repositories/doctor.repository';
import { AppointmentRepository } from '../../../../infraestructure/repositories/appointment.repository';

@Injectable()
export class CreateAppointmentCommand implements ICommand<CreateAppointmentRequest, CreateAppointmentResponse> {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}
  async handle(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    try {
      const patient = new Doctor();
      patient.setName(request.name);
      patient.setEmail(request.email);
      patient.setPassword(request.password);
      patient.setAddress(request.address);
      //
      // return this.doctorRepository.create(patient, null);
      return null;
    } catch (e) {
      throw 'Erro ao salvar o paciente';
    }
  }
}
