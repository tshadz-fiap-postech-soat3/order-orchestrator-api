import { IDoctor } from "../entities/doctor";
import { IRepositoryBase } from "../base/base-repository.interface";

export abstract class IDoctorRepository extends IRepositoryBase<IDoctor>{}