import { CreateLocationInput } from './create-location.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationInput extends PartialType(CreateLocationInput) {
  @Field(() => Int, { description: '지역 ID' })
  id: number;
}
