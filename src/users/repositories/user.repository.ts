import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@user/models/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const searchByEmail = { where: { email } };
    return this.userRepository.findOne(searchByEmail);
  }

  async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findById(id: string) {
    const searchById = { where: { id } };
    return this.userRepository.findOne(searchById);
  }
}
