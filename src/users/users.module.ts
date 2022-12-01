import { Module } from '@nestjs/common';
import { UsersResolver } from '@user/resolver/users.resolver';
import { UsersService } from '@user/service/users.service';
import { UserRepository } from '@user/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@user/models/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
