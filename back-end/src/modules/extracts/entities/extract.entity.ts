/* eslint-disable prettier/prettier */
import { UserEntity as User} from "../../users/entities/user.entity";

export interface ExtractEntity {
    id?: bigint;
    pages_process?: bigint;
    doc_type: string;
    createdAt: Date;
    userId?: bigint;
    user:    User[];

}
