import { Module } from '@nestjs/common';
import { ExtractsService } from './extracts.service';
import { ExtractsController } from './extracts.controller';

@Module({
  controllers: [ExtractsController],
  providers: [ExtractsService],
})
export class ExtractsModule {}
