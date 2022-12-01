import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '@user/models/dto/create-user.input';
import { UpdateUserInput } from '@user/models/dto/update-user.input';
import { UserRepository } from '@user/repositories/user.repository';
import { User } from '@user/models/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserInput: CreateUserInput) {
    const user = new User();
    user.email = createUserInput.email;
    user.username = createUserInput.username;
    user.firstname = createUserInput.firstname;
    user.lastname = createUserInput.lastname;
    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return this.userRepository.findById(id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
