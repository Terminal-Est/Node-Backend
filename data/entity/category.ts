import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "Categories"})
export class Categories {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({
        type: "varchar",
        length: 100
    })
    Name: string;

    @Column({
        type: "varchar",
        length: 100
    })
    Icon_FileName: string;
    
    @Column({
        type: "varchar",
        length: 100
    })
    Background_FileName: string;

    @Column({
        type: "varchar",
        length: 100
    })
    Image_TimeStamp: string;
}