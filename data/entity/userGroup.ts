import { Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Group } from "./group";

@Entity({name: "UserGroup"})
export class UserGroup {
    @PrimaryColumn("int")
    userid: number;

    @PrimaryColumn("int")
    groupid: number;
}