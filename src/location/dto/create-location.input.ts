import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field(() => String, { description: '지역이름' })
  name: string;
}
