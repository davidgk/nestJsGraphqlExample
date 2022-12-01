import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;
}
