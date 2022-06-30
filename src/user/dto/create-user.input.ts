import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: true, description: '닉네임' })
  email: string;

  @Field(() => String, { nullable: true, description: '자기소개' })
  password: string;
}
