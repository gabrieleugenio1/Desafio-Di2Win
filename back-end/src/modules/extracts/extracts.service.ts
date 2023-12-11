/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ExtractsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const allData = await this.prisma.extract.findMany();
    return allData;
  }

  async findAllWithUser() {
    const allDataUsers = await this.prisma.extract.findMany({
      include:{
        user: {
          select: {
            name: true,
            segment: true,
          }
        }
      }
    });
    return allDataUsers;
  }
  
  async findAllCount() {
    const allDataUsers = await this.prisma.$queryRaw`SELECT e.doc_type, COUNT(*) FROM extracts e GROUP BY e.doc_type;`
    return allDataUsers;
  }
  
  
}
