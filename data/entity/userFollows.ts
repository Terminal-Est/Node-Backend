import { Entity, PrimaryColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class UserFollows {
    @PrimaryColumn()
    @IsNotEmpty({
        message: "UUID Cannot be empty."
    })
    uuid: number;

    @PrimaryColumn()
    @IsNotEmpty({
        message: "UUIDFollowing cannot be empty"
    })
    uuidFollowing: number;
}