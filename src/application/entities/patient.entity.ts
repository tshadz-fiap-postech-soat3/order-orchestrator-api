import { EntityBase } from './base.entity';
import { IPatient } from '../../domain/entities/patient';

export class Patient extends EntityBase implements IPatient {
  address: string;
  email: string;
  name: string;
  password: string;
}
