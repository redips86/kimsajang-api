import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Common {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field(() => String, { description: 'Example field (placeholder)' })
  updatedAt: Date;
}
