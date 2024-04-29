import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";
import { VideoComment } from "./videoComment";
import { Group } from "./group";

@Entity()
export class Video {
    @PrimaryColumn()
    @IsNotEmpty()
    @MaxLength(450)
    videoId: string;

    @Column()
    @IsNotEmpty()
    uuid: number;

    @Column()
    @Length(3, 500, {
        message: "Title must be between 3 and 500 characters."
    })
    title: string;

    @Column()
    @IsOptional()
    @MaxLength(250, {
        message: "Description cannot exceed 250 characters."
    })
    description: string;

    @Column()
    @IsOptional()
    likes: number;

    @Column()
    @IsOptional()
    weight: number;

    @Column()
    @IsNotEmpty()
    timestamp: string;

    @OneToMany(() => VideoComment, (comment) => comment.videoId)
    comments: VideoComment[];

    @OneToMany(() => Group, (group) => group.ID)
    groups: Group[]
}