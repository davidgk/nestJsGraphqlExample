import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractModelEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
    default: () => "timezone('utc', now())",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: false,
    default: () => "timezone('utc', now())",
  })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: false })
  deletedAt!: Date;
}
