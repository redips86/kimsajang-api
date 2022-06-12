import { Field, ObjectType } from '@nestjs/graphql';
import { Common } from '@common/entities/common.entity';

@ObjectType()
export class Location extends Common {
  @Field(() => String, { description: '지역명' })
  name: string;

  @Field(() => Boolean, { description: '삭제여부' })
  deleted: boolean;
}
