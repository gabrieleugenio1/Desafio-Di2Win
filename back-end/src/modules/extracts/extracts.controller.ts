import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtractsService } from './extracts.service';
import { CreateExtractDto } from './dto/create-extract.dto';
import { UpdateExtractDto } from './dto/update-extract.dto';

@Controller('extracts')
export class ExtractsController {
  constructor(private readonly extractsService: ExtractsService) {}

  @Post()
  create(@Body() createExtractDto: CreateExtractDto) {
    return this.extractsService.create(createExtractDto);
  }

  @Get()
  findAll() {
    return this.extractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extractsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtractDto: UpdateExtractDto) {
    return this.extractsService.update(+id, updateExtractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extractsService.remove(+id);
  }
}
