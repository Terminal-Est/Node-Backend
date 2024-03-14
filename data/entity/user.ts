import { Entity, PrimaryColumn, Column } from "typeorm";
import { Length } from "class-validator";

@Entity()
export class User {
    @PrimaryColumn()
    userId: string;

    @Column()
    admin: boolean;

    @Column()
    auth: boolean;

    @Column()
    username: string;

    @Column()
    address: string;

    @Column()
    @Length(3, 3)
    city: string;

    @Column()
    state: string;

    @Column()
    postcode: string;
}