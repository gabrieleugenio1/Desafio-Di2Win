/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
} from '@nestjs/common';
import { ExtractsService } from './extracts.service';

@Controller('extracts')
export class ExtractsController {
  constructor(private readonly extractsService: ExtractsService) {}

  @Get()
  async findAll() {
    return await this.extractsService.findAll();
  }

  @Get('/withUser')
  async findAllWithUser() {
    return this.extractsService.findAllWithUser();
  }

  @Get('/count')
  async findAllCount() {
    return this.extractsService.findAllCount();
  }

}

