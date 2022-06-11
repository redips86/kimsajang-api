import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserQueryResolver } from './user.query.resolver';
import { UserMutationResolver } from './user.mutation.resolver';
import { LocationService } from '../location/location.service';

@Module({
  providers: [
    UserQueryResolver,
    UserMutationResolver,
    UserService,
    LocationService,
  ],
})
export class UserModule {}
