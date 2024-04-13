import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'Likes' })
export class Like {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({
        type: "nvarchar",
        length: 450
    })
    videoID: string;

    @Column()
    uuid: number;
}