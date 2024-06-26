import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Password {
    @PrimaryColumn()
    uuid: number;

    @Column()
    passHash: string;
}