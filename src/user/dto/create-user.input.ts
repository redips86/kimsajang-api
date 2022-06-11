import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: true, description: '닉네임' })
  nickname?: string;

  @Field(() => String, { nullable: true, description: '자기소개' })
  intro?: string;

  @Field(() => Float, { nullable: true, description: '지역' })
  locationId?: number;

  @Field(() => [Float], { nullable: true, description: '업종' })
  sectorIds?: [number];
}
