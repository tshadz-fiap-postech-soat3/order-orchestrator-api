import { IDoctor } from '../../../../domain/entities/doctor';

export type CreateOrderResponse = Omit<
  IDoctor,
  'createdAt' | 'updatedAt' | 'password'
>;
