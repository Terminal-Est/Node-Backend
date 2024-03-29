import { UUID } from "crypto";
import { Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Group } from "./group";

@Entity()
export class UserGroup {
    @PrimaryColumn()
    uuid: number;

    @PrimaryColumn()
    groupid: number;

    @OneToOne(() => Group)
    @JoinColumn()
    group: Group
}