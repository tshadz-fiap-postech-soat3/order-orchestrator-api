import { IEntityBase } from '../base/base.entity.interface';
import { IPatient } from './patient';
import { IDoctor } from './doctor';
import { AppointmentStatus } from '../enums/appointment-status.enum';

export interface IAppointment extends IEntityBase {
  patient: IPatient;
  doctor: IDoctor;
  dateStart: Date;
  specialization: string;
  status: AppointmentStatus;
  address: string;
}
