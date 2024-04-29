import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { GroupComment } from "./groupComment";

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

    @OneToMany(() => GroupComment, (comment) => comment.groupId)
    comments: Comment[];
}