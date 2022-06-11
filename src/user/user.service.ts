import { Injectable } from '@nestjs/common';
import prisma from '@libs/prisma-client';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ApolloError } from 'apollo-server-core';

@Injectable()
export class UserService {
  async create(createUserInput: CreateUserInput) {
    const location = await prisma.location.findUnique({
      where: {
        id: createUserInput.locationId,
      },
    });

    if (!location) {
      throw new ApolloError(`location ${createUserInput.locationId} not found`);
    }

    await prisma.user.create({
      data: {
        ...createUserInput,
      },
    });
    return true;
  }

  async findAll() {
    const users = await prisma.user.findMany({
      include: {
        location: true,
      },
    });

    return JSON.parse(JSON.stringify(users));
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        i,
      },
      include: {
        location: tru,
      ,
    });

    if (!user) {
      throw new ApolloError(`user ${id} not found`);
    }

    return JSON.parse(JSON.stringify(user));
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    await this.findOne(id);

    await prisma.user.update({
      data: {
        ...updateUserInput
      },
      where: {
        id
      }
    });
    return true;
  }

  async remove(id: number) {
    await this.findOne(id);

    await prisma.user.update({
      data: {
        isDel: true
      },
      where: {
        id
      }
    });
    return true;
  }
}
