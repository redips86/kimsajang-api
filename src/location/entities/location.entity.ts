import { Field, ObjectType } from '@nestjs/graphql';
import { Common } from '@common/entities/common.entity';

@ObjectType()
export class Location extends Common {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  isDel: boolean;
}
