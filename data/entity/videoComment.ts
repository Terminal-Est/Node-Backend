import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsNotEmpty, IsOptional, isNotEmpty } from "class-validator";
import { Video } from "./video";

/**
 * User entity class. TypeORM class with validation decorators.
 */
@Entity({ name: "VideoComment" })
export class VideoComment {
    @PrimaryGeneratedColumn()
    commentId: number;

    @Column()
    @IsNotEmpty()
    videoId: string;

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
}