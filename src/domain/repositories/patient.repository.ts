import { IRepositoryBase } from '../base/base-repository.interface';
import { IPatient } from '../entities/patient';

export abstract class IPatientRepository extends IRepositoryBase<IPatient> {}
