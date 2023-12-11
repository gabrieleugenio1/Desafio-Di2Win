import { Injectable } from '@nestjs/common';
import { CreateExtractDto } from './dto/create-extract.dto';
import { UpdateExtractDto } from './dto/update-extract.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ExtractsService {
  constructor(private prisma: PrismaService) {}

  create(createExtractDto: CreateExtractDto) {



    return 'This action adds a new extract';
  }

  findAll() {
    return `This action returns all extracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extract`;
  }

  update(id: number, updateExtractDto: UpdateExtractDto) {
    return `This action updates a #${id} extract`;
  }

  remove(id: number) {
    return `This action removes a #${id} extract`;
  }
}
