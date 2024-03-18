import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Password {
    @PrimaryColumn()
    uuid: string;

    @Column()
    passHash: string;
}