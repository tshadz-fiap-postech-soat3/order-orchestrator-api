import { CreateOrderRequest } from './create-order.request';
import { CreateOrderResponse } from './create-order.response';
import { Doctor } from '../../../entities/doctor.entity';
import { ICommand } from '../../../../domain/base/command.interface';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../../infraestructure/repositories/doctor.repository';

@Injectable()
export class CreateOrderCommand implements ICommand<CreateOrderRequest, CreateOrderResponse> {
  constructor(private readonly doctorRepository: DoctorRepository) {}
  private readonly logger = console;
  private readonly objectName = CreateOrderCommand.name;
  async handle(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    try {
      const doctor = new Doctor();
      doctor.setName(request.name);
      doctor.setSpecialization(request.specialization);
      doctor.setCrm(request.crm);
      doctor.setEmail(request.email);
      doctor.setPassword(request.password);
      doctor.setAddress(request.address);

      return this.mapToResponse(await this.doctorRepository.create(doctor, null));
    } catch (e) {
      throw 'Erro ao salvar o doutor';
    }
  }

  private mapToResponse(doctor: Doctor): CreateOrderResponse {
    this.logger.log(`${this.objectName} - Objeto para mapear `, doctor);
    return {
      id: doctor.id,
      name: doctor.name,
      specialization: doctor.specialization,
      crm: doctor.crm,
      email: doctor.email,
      address: doctor.address,
      days: [],
    };
  }
}
