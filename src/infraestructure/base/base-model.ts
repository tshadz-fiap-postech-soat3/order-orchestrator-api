import { IsDate, IsInt, IsUUID } from 'class-validator';
import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { IEntityBase } from "../../domain/base/base.entity.interface";

@Entity()
export class BaseModel implements IEntityBase {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id?: string;

  @CreateDateColumn({
    type: 'datetime',
    generated: true,
    nullable: false,
    name: 'created_at',
  })
  @IsDate()
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'datetime',
    generated: true,
    nullable: false,
    name: 'updated_at',
  })
  @IsDate()
  updatedAt?: Date;

  @VersionColumn({ default: 1 })
  @IsInt()
  version?: number;
}
