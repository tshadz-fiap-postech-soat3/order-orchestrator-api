import { IEntityBase } from '../base/base.entity.interface';
import { IPatient } from './patient';

export interface IClinicalRecord extends IEntityBase {
  patient: IPatient;
  url: string;
}
