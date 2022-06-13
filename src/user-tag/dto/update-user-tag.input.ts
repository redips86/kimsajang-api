import { CreateUserTagInput } from './create-user-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserTagInput extends PartialType(CreateUserTagInput) {
  @Field(() => Int)
  id: number;
}
