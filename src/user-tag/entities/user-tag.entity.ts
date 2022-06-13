import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from '@common/entities/common.entity';

@ObjectType()
export class UserTag {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  tagId: number;

  @Field(() => String, { description: '생성일시' })
  createdAt: Date;

  @Field(() => String, { description: '수정일시' })
  updatedAt: Date;
}
