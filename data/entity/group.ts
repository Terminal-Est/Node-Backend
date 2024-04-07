import { UUID } from "crypto";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Group {
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
    Description: string;

    @Column()
    System: number;

    @Column()
    CategoryID: number;

    @Column({
        type: "varchar",
        length: 100
    })
    Location: string;
    
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