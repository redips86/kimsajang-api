import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserTagService } from './user-tag.service';
import { UserTag } from './entities/user-tag.entity';
import { CreateUserTagInput } from './dto/create-user-tag.input';
import { UpdateUserTagInput } from './dto/update-user-tag.input';

@Resolver(() => UserTag)
export class UserTagResolver {
  constructor(private readonly userTagService: UserTagService) {}

  @Mutation(() => UserTag)
  createUserTag(
    @Args('createUserTagInput') createUserTagInput: CreateUserTagInput,
  ) {
    return this.userTagService.create(createUserTagInput);
  }

  @Query(() => [UserTag], { name: 'userTags' })
  findAll() {
    return this.userTagService.findAll();
  }

  @Query(() => UserTag, { name: 'userTag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userTagService.findOne(id);
  }

  @Mutation(() => UserTag)
  updateUserTag(
    @Args('updateUserTagInput') updateUserTagInput: UpdateUserTagInput,
  ) {
    return this.userTagService.update(
      updateUserTagInput.id,
      updateUserTagInput,
    );
  }

  @Mutation(() => Number)
  removeUserTag(@Args('id', { type: () => Int }) id: number) {
    return this.userTagService.remove(id);
  }
}
