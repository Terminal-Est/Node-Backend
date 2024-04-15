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

    @OneToMany(() => GroupComment, (comment) => comment.groupId)
    comments: Comment[];
}