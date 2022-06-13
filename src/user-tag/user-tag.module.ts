import { Module } from '@nestjs/common';
import { UserTagService } from './user-tag.service';
import { UserTagResolver } from './user-tag.resolver';

@Module({
  providers: [UserTagResolver, UserTagService]
})
export class UserTagModule {}
