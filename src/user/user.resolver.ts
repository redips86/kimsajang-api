import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => Boolean)
  isLogin(): boolean {
    return true;
  }
}
