import { PartialType } from '@nestjs/mapped-types';
import { CreateExtractDto } from './create-extract.dto';

export class UpdateExtractDto extends PartialType(CreateExtractDto) {}
