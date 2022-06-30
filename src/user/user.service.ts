import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ApolloError } from 'apollo-server-core';
import { LocationService } from '../location/location.service';
import prisma from '@libs/prisma-client';
import encrypt from '@libs/encrypt';

@Injectable()
export class UserService {
  constructor(private readonly locationService: LocationService) {}

  async create(createUserInput: CreateUserInput) {
    createUserInput.password = await encrypt(createUserInput.password);

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
        id,
      },
      include: {
        location: true,
      },
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
        ...updateUserInput,
      },
      where: {
        id,
      },
    });
    return true;
  }

  async remove(id: number) {
    await this.findOne(id);

    await prisma.user.delete({
      where: {
        id,
      },
    });
    return true;
  }
}
