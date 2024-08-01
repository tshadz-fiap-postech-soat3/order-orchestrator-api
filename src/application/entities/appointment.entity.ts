import { EntityBase } from './base.entity';
import { IDoctor } from '../../domain/entities/doctor';
import { IAppointment } from '../../domain/entities/appointment';
import { IPatient } from '../../domain/entities/patient';
import { AppointmentStatus } from '../../domain/enums/appointment-status.enum';

export class Appointment extends EntityBase implements IAppointment {
  address: string;
  dateStart: Date;
  doctor: IDoctor;
  patient: IPatient;
  specialization: string;
  status: AppointmentStatus;
}
