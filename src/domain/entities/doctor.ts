import { IEntityBase } from '../base/base.entity.interface';
import { IDoctorDay } from './doctor-day';

export interface IDoctor extends IEntityBase {
  name: string;
  specialization: string;
  crm: string;
  email: string;
  days: IDoctorDay[];
  password: string;
  address: string;
}
