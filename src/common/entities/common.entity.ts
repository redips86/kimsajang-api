import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Common {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: '생성일시' })
  createdAt: Date;

  @Field(() => String, { description: '수정일시' })
  updatedAt: Date;
}
