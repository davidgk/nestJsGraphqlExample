import { Field, ObjectType } from '@nestjs/graphql';
import { DB_PUBLIC_SCHEMA, DB_TABLE_NAMES } from '@config/constants';
import { Column, Entity } from 'typeorm';
import { AbstractModelEntity } from '@commons/models/abstract-model.entity';

@ObjectType()
@Entity(DB_TABLE_NAMES.USERS, DB_PUBLIC_SCHEMA)
export class User extends AbstractModelEntity {
  @Field(() => String, { description: 'Username' })
  @Column({ name: 'username', length: 40, nullable: true })
  username: string;

  @Field(() => String, { description: 'FirstName' })
  @Column({ name: 'first_name', length: 40, nullable: true })
  firstname: string;

  @Field(() => String, { description: 'LastName' })
  @Column({ name: 'last_name', length: 40, nullable: true })
  lastname: string;

  @Field(() => String, { description: 'Email' })
  @Column({ name: 'email', length: 40 })
  email: string;
}
