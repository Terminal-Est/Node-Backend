import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Group } from "./group";
import { Video } from "./video";

/**
 * GroupVideos entity class. TypeORM class with validation decorators.
 */
@Entity({ name: "GroupVideos" })
export class GroupVideos {
    @PrimaryColumn()
    @IsNotEmpty()
   
    groupId: number;

    @PrimaryColumn()
    @IsNotEmpty()
    videoId: string;

    @OneToOne(() => Video, (video) => video.videoId)
    video: Video;

    @OneToOne(() => Group, (group) => group.ID)
    group: Group;
}