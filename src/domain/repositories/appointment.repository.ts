import { IRepositoryBase } from '../base/base-repository.interface';
import { IAppointment } from '../entities/appointment';

export abstract class IAppointmentRepository extends IRepositoryBase<IAppointment> {}
