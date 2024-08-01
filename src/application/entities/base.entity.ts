import { IEntityBase } from "../../domain/base/base.entity.interface";


export abstract class EntityBase implements IEntityBase {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  static isEntity(value: any): boolean {
    return value instanceof EntityBase;
  }
}
