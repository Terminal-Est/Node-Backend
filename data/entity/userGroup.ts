import { Entity, PrimaryColumn, Column} from "typeorm";
import { IsOptional } from "class-validator";

@Entity({name: "UserGroup"})
export class UserGroup {
    @PrimaryColumn("int")
    userid: number;

    @PrimaryColumn("int")
    groupid: number;
    
    @Column()
    @IsOptional()
    banned: number;
}