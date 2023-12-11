import { Module } from '@nestjs/common';
import { ExtractsService } from './extracts.service';
import { ExtractsController } from './extracts.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ExtractsController],
  providers: [ExtractsService, PrismaService],
})
export class ExtractsModule {}
