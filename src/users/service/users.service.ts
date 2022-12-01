import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '@user/models/dto/create-user.input';
import { UpdateUserInput } from '@user/models/dto/update-user.input';
import { UserRepository } from '@user/repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
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
