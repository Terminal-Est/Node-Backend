import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({name: "Categories"})
export class Categories {
    @PrimaryColumn()
    ID: number;

    @Column({
        type: "varchar",
        length: 100
    })
    Name: string;
}