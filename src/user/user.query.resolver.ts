import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }
}
