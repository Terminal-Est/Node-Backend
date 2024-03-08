import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Password {
    @PrimaryColumn()
    userId: string;

    @Column()
    passHash: string;
}