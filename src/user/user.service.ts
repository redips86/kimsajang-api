import { Injectable } from '@nestjs/common';
import prisma from '@libs/prisma-client';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  async create(createUserInput: CreateUserInput) {
    const newUser = await prisma.user.create({
      data: {
        ...createUserInput,
      },
    });
    return newUser;
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: number) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
