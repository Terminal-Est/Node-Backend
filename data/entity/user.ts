import { Entity, PrimaryColumn, Column } from "typeorm";

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
    city: string;

    @Column()
    state: string;

    @Column()
    postcode: string;
}