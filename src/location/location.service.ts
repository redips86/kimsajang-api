import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import prisma from '@libs/prisma-client';

@Injectable()
export class LocationService {
  async create(createLocationInput: CreateLocationInput) {
    const newLocation = await prisma.location.create({
      data: {
        ...createLocationInput,
      },
    });
    console.log(newLocation);

    return newLocation;
  }

  async findAll() {
    const allLocation = await prisma.location.findMany();
    console.log(allLocation);
    return await prisma.location.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
