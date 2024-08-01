import { IEntityBase } from '../base/base.entity.interface';

export interface IPatient extends IEntityBase {
  name: string;
  email: string;
  password: string;
  address: string;
}
