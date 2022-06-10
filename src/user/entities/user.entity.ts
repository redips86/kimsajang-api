import { Field, ObjectType } from '@nestjs/graphql';
import { Common } from '@common/entities/common.entity';
import { Location } from '../../location/entities/location.entity';

@ObjectType()
export class User extends Common {
  @Field(() => Boolean, { description: '삭제여부' })
  isDel: boolean;

  @Field(() => String, {
    nullable: true,
    description: '닉네임',
  })
  nickname?: string;

  @Field(() => String, {
    nullable: true,
    description: '자기 소개',
  })
  intro?: string;

  @Field(() => Location, {
    nullable: true,
    description: '지역',
  })
  location?: Location;
}
