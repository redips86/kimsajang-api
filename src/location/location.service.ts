import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import prisma from '@libs/prisma-client';
import { ApolloError } from 'apollo-server-core';

@Injectable()
export class LocationService {
  async create(createLocationInput: CreateLocationInput) {
    await prisma.location.create({
      data: {
        ...createLocationInput,
      },
    });

    return true;
  }

  async findAll() {
    const allLocation = await prisma.location.findMany();

    return JSON.parse(JSON.stringify(allLocation));
  }

  async findOne(id: number) {
    const location = await prisma.location.findUnique({
      where: {
        id,
      },
    });
    if (!location) {
      throw new ApolloError(`location ${id} not found`);
    }

    return location;
  }

  async update(id: number, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  async remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
