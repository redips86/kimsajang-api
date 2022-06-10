import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: true, description: '닉네임' })
  nickname?: string;

  @Field(() => String, { nullable: true, description: '자기소개' })
  intro?: string;

  @Field(() => Int, { nullable: true, description: '지역' })
  locationId?: number;
}
