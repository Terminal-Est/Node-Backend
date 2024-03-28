import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Uuid {
    @PrimaryColumn()
    uuid: number;

}