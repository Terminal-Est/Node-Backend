import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Group } from "./group";

/**
 * GroupComment entity class. TypeORM class with validation decorators.
 */
@Entity({ name: "GroupComment" })
export class GroupComment {
    @PrimaryGeneratedColumn()
    commentId: number;

    @Column()
    @IsNotEmpty()
    groupId: number;

    @Column()
    @IsNotEmpty()
    uuid: number;
   
    @Column()
    @IsNotEmpty()
    comment: string;

    @Column()
    likes: number;

    @Column()
    @IsOptional()
    replyId: number;

    @Column()
    @IsNotEmpty()
    timestamp: string;

    @Column()
    @IsOptional()
    flagged: boolean;
}