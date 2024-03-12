import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({schema: "progprojdb"})
export class Password {
    @PrimaryColumn()
    userId: string;

    @Column()
    passHash: string;
}