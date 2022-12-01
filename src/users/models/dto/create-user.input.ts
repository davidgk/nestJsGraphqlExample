import { Field, InputType } from '@nestjs/graphql';
import { type } from 'os';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  username!: string;

  @Field(() => String)
  @IsNotEmpty()
  firstname: string;

  @Field(() => String)
  @IsNotEmpty()
  lastname: string;

  @Field(() => String)
  @IsNotEmpty()
  email: string;
}
