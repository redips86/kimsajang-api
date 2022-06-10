import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Common {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  updatedAt: Date;
}
