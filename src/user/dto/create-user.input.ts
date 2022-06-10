import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: '닉네임' })
  nickname?: string;

  @Field(() => String, { description: '자기소개' })
  intro?: string;

  @Field(() => Int, { description: '지역' })
  locationId?: number;
}
