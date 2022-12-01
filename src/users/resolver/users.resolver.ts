import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@user/models/entities/user.entity';
import { CreateUserInput } from '@user/models/dto/create-user.input';
import { UpdateUserInput } from '@user/models/dto/update-user.input';
import { UsersService } from '@user/service/users.service';
import { getRandomUuid } from '@user/models/testCommons/commons-helper';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
  createUser(
    @Args('userInput', { type: () => CreateUserInput })
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => User, { name: 'user_by_email' })
  findByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findByEmail(email);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
