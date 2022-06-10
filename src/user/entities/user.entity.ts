import { Field, ObjectType } from '@nestjs/graphql';
import { Common } from '@common/entities/common.entity';
import { Location } from '../../location/entities/location.entity';

@ObjectType()
export class User extends Common {
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  isDel: boolean;

  @Field(() => String, { description: 'Example field (placeholder)' })
  nickname: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  intro: string;

  @Field(() => Location, { description: 'Example field (placeholder)' })
  location: Location;
}
