import { CreatePatientRequest } from './create-patient.request';
import { CreatePatientResponse } from './create-patient.response';
import { Doctor } from '../../../entities/doctor.entity';
import { IDoctorRepository } from '../../../../domain/repositories/doctor.repository';
import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../../infraestructure/repositories/doctor.repository';

@Injectable()
export class CreatePatientCommand
  implements ICommand<CreatePatientRequest, CreatePatientResponse>
{
  constructor(private readonly doctorRepository: DoctorRepository) {}
  async handle(request: CreatePatientRequest): Promise<CreatePatientResponse> {
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
