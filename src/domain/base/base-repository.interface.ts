import { IEntityBase } from "./base.entity.interface";
import { PaginatedResult } from "../../infraestructure/base/base-repository.adapter";
import { DeepPartial } from "typeorm";

export abstract class IRepositoryBase<DomainModel extends IEntityBase> {
  abstract mapToDomain(normalizedPersistenceObject: any): DomainModel;

  abstract create<T = any>(data: T, transactionSession?: any): Promise<DomainModel>;
  abstract update(id: string, data: DeepPartial<DomainModel>, transactionSession?: any): Promise<void>;
  abstract updateMany(filter: any, data: Partial<DomainModel>, transactionSession?: any): Promise<void>;
  abstract deleteOne(id: string, transactionSession?: any): Promise<void>;
  abstract deleteMany(filter: any, transactionSession?: any): Promise<void>;
  abstract exists(filter: Record<string, any>): Promise<boolean>;
  abstract get(id: string, select?: string[], populate?: any): Promise<DomainModel>;
  abstract paginate(
    page: number,
    limit: number,
    query: any,
    select?: string[],
    populate?: any,
  ): Promise<PaginatedResult<DomainModel>>;
  abstract getOne(filter: any, select?: string[], populate?: any): Promise<DomainModel>;
}