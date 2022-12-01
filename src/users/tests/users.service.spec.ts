import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '@user/service/users.service';
import { TestTypeOrmModules } from '@database/test-database-helper';
import { User } from '@user/models/entities/user.entity';
import { UserRepository } from '@user/repositories/user.repository';

describe('UsersService', () => {
  let service: UsersService;
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [...TestTypeOrmModules(User)],
      providers: [UsersService, UserRepository],
    }).compile();
    service = moduleRef.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
