import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserQueryResolver } from './user.query.resolver';
import { UserMutationResolver } from './user.mutation.resolver';

@Module({
  providers: [UserQueryResolver, UserMutationResolver, UserService],
})
export class UserModule {}
