import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ApolloError } from 'apollo-server-core';
import { LocationService } from '../location/location.service';
import prisma from '@libs/prisma-client';
import { encrypt, compare } from '@libs/encrypt';

@Injectable()
export class UserService {
  constructor(private readonly locationService: LocationService) {}

  async create(createUserInput: CreateUserInput) {
    const exists = await prisma.user.findFirst({
      where: {
        email: createUserInput.email,
      },
    });
    console.log(exists);
    if (exists) {
      throw new ApolloError(`이미 존재하는 회원입니다.`);
    }

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

  async findUser(email: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ApolloError('아이디나 비밀번호가 일치하지 않습니다.');
    }

    const checkPw = await compare(password, user.password);
    if (!checkPw) {
      throw new ApolloError('아이디나 비밀번호가 일치하지 않습니다.');
    }

    return JSON.parse(JSON.stringify(user));
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
