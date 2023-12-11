/* eslint-disable prettier/prettier */
import { ExtractEntity as Extract } from "../../extracts/entities/extract.entity";

export interface UserEntity {
    id?: bigint;
    name: string;
    segment:   string
    createdAt?: Date;
    updatedAt?: Date;
    extract?:  Extract[];


}
