import { Entity, PrimaryColumn, Column } from "typeorm";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

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
    @Length(3, 50, {
        message: "Title must be between 3 and 50 characters."
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
    timestamp: number;
}