import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from '@user/resolver/users.resolver';
import { TestTypeOrmModules } from '@database/test-database-helper';
import { User } from '@user/models/entities/user.entity';
import { UsersService } from '@user/service/users.service';
import { UserRepository } from '@user/repositories/user.repository';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [...TestTypeOrmModules(User)],
      providers: [UsersResolver, UsersService, UserRepository],
    }).compile();

    resolver = moduleRef.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
