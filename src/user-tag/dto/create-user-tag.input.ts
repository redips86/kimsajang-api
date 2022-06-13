import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserTagInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
