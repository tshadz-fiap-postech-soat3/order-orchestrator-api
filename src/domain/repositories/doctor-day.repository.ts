import { IRepositoryBase } from '../base/base-repository.interface';
import { IDoctorDay } from '../entities/doctor-day';

export abstract class IDoctorDayRepository extends IRepositoryBase<IDoctorDay> {}
