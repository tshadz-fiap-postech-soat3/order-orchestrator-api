import { IDoctor } from '../../../../domain/entities/doctor';

export type CreateDoctorResponse = Omit<
  IDoctor,
  'createdAt' | 'updatedAt' | 'password'
>;
