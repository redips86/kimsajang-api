import { Injectable } from '@nestjs/common';
import { CreateUserTagInput } from './dto/create-user-tag.input';
import { UpdateUserTagInput } from './dto/update-user-tag.input';
import prisma from '@libs/prisma-client';

@Injectable()
export class UserTagService {
  create(createUserTagInput: CreateUserTagInput) {
    return 'This action adds a new userTag';
  }

  async findAll() {
    return await prisma.userTag.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} userTag`;
  }

  update(id: number, updateUserTagInput: UpdateUserTagInput) {
    return `This action updates a #${id} userTag`;
  }

  async remove(id: number) {
    const { count } = await prisma.userTag.deleteMany({
      where: {
        userId: id,
      },
    });

    return count;
  }
}
