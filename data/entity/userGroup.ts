import { UUID } from "crypto";
import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserGroup {
    @PrimaryColumn()
    uuid: number;

    @PrimaryColumn()
    groupid: number;
}