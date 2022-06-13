import { Test, TestingModule } from '@nestjs/testing';
import { UserTagResolver } from './user-tag.resolver';
import { UserTagService } from './user-tag.service';

describe('UserTagResolver', () => {
  let resolver: UserTagResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTagResolver, UserTagService],
    }).compile();

    resolver = module.get<UserTagResolver>(UserTagResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
