/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async countAllExtract() {
    const countAllExtract = await this.prisma.$queryRaw`SELECT u.name,COUNT(*) FROM users u JOIN extracts e ON u.id = e.user_id GROUP BY u.name;`
    return countAllExtract;
  }

}
