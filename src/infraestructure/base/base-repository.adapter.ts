
import { IEntityBase } from "../../domain/base/base.entity.interface";
import { IRepositoryBase } from "../../domain/base/base-repository.interface";
import { DeepPartial, EntityTarget, Repository } from "typeorm";
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

export interface PaginatedResult<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  nextPage: number;
  hasNext: boolean;
  limit: number;
}
export abstract class BaseRepositoryMySQLAdapter<DomainModel extends IEntityBase, RepositoryModel>
  implements IRepositoryBase<DomainModel>
{
  protected repository: Repository<DomainModel>
  protected constructor(repository: Repository<RepositoryModel>, target: EntityTarget<DomainModel>) {
    this.repository = repository.manager.getRepository(target);
  }

  abstract mapToDomain(normalizedPersistenceObject: any): DomainModel;

  private mapSelectFromStringListToObject(selectedFields: string[]): object {
    const fields: string[] = (Array.isArray(selectedFields) && selectedFields) || [];
    return fields.reduce((acc, curr: string) => {
      acc[curr] = true;
      return acc;
    }, {});
  }

  private mapRelationsFromPopulateObject(populate: string): object {
    return populate ? { [`${populate}`]: true } : Object();
  }

  async create<T>(data: T, transactionSession: any): Promise<DomainModel> {
    const recordDb = await this.repository.save(data as any, {
      transaction: transactionSession,
    });
    return this.mapToDomain(recordDb);
  }

  async deleteMany(filter: any, transactionSession: any): Promise<void> {
    const entities = await this.repository.find({ where: filter });
    if (!entities.length) return;
    await this.repository.remove(entities, { transaction: transactionSession });
  }

  async deleteOne(id: any, transactionSession: any): Promise<void> {
    const entity: DomainModel = await this.repository.findOne({
      where: { id: id },
    });
    if (entity) await this.repository.remove(entity, { transaction: transactionSession });
  }

  async exists(filter: Record<string, any>): Promise<boolean> {
    return !!await this.repository.count({ where: filter });
  }

  async get(id: any, select?: string[], populate?: string): Promise<DomainModel> {
    const selectObject: object = this.mapSelectFromStringListToObject(select);
    const relationsObject = this.mapRelationsFromPopulateObject(populate);
    // @todo ver a implementacao do load relations ids, não estava trazendo o populate
    const result: DomainModel = await this.repository.findOne({
      where: { id: id },
      select: selectObject,
      relations: { ...relationsObject },
      // loadEagerRelations: true,
      // loadRelationIds: true,
    });
    return this.mapToDomain(result);
  }

  async getOne(
    filter: FindOptionsWhere<DomainModel>,
    select: string[] = null,
    populate: any = null,
  ): Promise<DomainModel> {
    const selectObject: object = this.mapSelectFromStringListToObject(select);
    const relationsObject = this.mapRelationsFromPopulateObject(populate);
    // @todo ver a implementacao do load relations ids, não estava trazendo o populate
    const result: DomainModel = await this.repository.findOne({
      where: filter,
      select: selectObject,
      relations: { ...relationsObject },
      // loadRelationIds: true,
      // loadEagerRelations: true,
    });
    return this.mapToDomain(result);
  }


  async paginate(
    page: number = 1,
    limit: number = 25,
    query: FindOptionsWhere<DomainModel>,
    select: string[] = null,
    populate: any = null,
  ): Promise<PaginatedResult<DomainModel>> {
    const selectObject = this.mapSelectFromStringListToObject(select);
    const relationsObject = this.mapRelationsFromPopulateObject(populate);
    const result = await this.repository.find({
      where: query,
      select: selectObject,
      relations: { ...relationsObject },
      skip: page - 1,
      take: limit,
      loadEagerRelations: true,
      loadRelationIds: true,
    });
    const totalDocs: number = await this.repository.countBy(query);
    const totalPages: number = this.getTotalPages(totalDocs, limit);
    const hasNexPage: boolean = totalPages > page;
    return {
      docs: result.map((item) => this.mapToDomain(item)),
      limit,
      currentPage: page,
      nextPage: hasNexPage ? page++ : page,
      totalPages,
      totalDocs,
      hasNext: hasNexPage,
    };
  }

  private getTotalPages(totalDocs: number, limit: number): number {
    if (totalDocs <= limit) return 1;
    return Math.ceil(totalDocs / limit);
  }

  async update(id: string, data: DeepPartial<any>, transactionSession?: any): Promise<void> {
    await this.repository.update(id, { ...data });
  }

  async updateMany(filter: any, data: Partial<any>, transactionSession: any): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await this.repository.update(filter, { ...data });
  }

}
