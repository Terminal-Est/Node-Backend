import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsNotEmpty, IsEmail, IsPostalCode, IsDateString, IsOptional } from "class-validator";

/**
 * User entity class. TypeORM class with validation decorators.
 */
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column()
    @IsEmail({ 
    }, {
        message: "Invalid E-Mail address."
    })
    @IsNotEmpty({
        message: "E-Mail field cannot be empty."
    })
    @Length(0, 250, {
        message: "E-mail address cannot exceed 250 characters."
    })
    email: string;

    @Column()
    @IsOptional()
    admin: boolean;
   
    @Column()
    @IsOptional()
    auth: boolean;

    @Column()
    @IsOptional()
    banned: number;

    @Column()
    @IsNotEmpty({
        message: "Username field cannot be empty."
    })
    @Length(5, 30, {
        message: "Username must be between 5 and 30 characters."
    })
    username: string;

    @Column()
    @IsNotEmpty({
        message: "DOB field cannot be empty."
    })
    @IsDateString({
        strict: false,
        strictSeparator: false
    },{
        message: "DOB is not a valid date."
    })
    dob: string;

    @Column()
    @IsNotEmpty({
        message: "Address field cannot be empty."
    })
    address: string;

    @Column()
    @IsNotEmpty({
        message: "City field cannot be empty."
    })
    @Length(3, 50, {
        message: "City must be between 3 and 50 characters."
    })
    city: string;

    @Column()
    @IsNotEmpty({
        message: "State field cannot be empty."
    })
    @Length(2, 3, {
        message: "State must be 3 characters."
    })
    state: string;

    @Column()
    @IsNotEmpty({
        message: "Postcode field cannot be empty."
    })
    @IsPostalCode('AU', {
        message: "Invalid Postcode."
    })
    postcode: string;

    @Column()
    @IsOptional()
    @Length(0, 250, {
        message: "Avatar Filename Length Error."
    })
    avatar: string;

    @Column()
    @IsOptional()
    @Length(0, 250, {
        message: "First name must not exceed 250 characters."
    })
    fname: string;

    @Column()
    @IsOptional()
    @Length(0, 250, {
        message: "Last name must not exceed 250 characters."
    })
    lname: string;
}