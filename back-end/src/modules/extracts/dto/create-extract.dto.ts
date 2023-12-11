import { IsString } from "class-validator";

export class CreateExtractDto {
    @IsString()
    doc_type: string;

}
