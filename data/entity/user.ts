import { Entity, PrimaryColumn, Column } from "typeorm";
import { Length, IsNotEmpty, IsEmail, IsPostalCode, IsBooleanString } from "class-validator";

/**
 * User entity class. TypeORM class with validation decorators.
 */
@Entity()
export class User {
    @PrimaryColumn()
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
    userId: string;

    @Column()
    @IsBooleanString({
        message: "Admin field must be a boolean value."
    })
    admin: boolean;
   
    @Column()
    @IsBooleanString({
        message: "Auth field must be a boolean value."
    })
    auth: boolean;

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
        message: "Address field cannot be empty."
    })
    address: string;

    @Column()
    @IsNotEmpty({
        message: "City field cannot be empty."
    })
    @Length(3, 3, {
        message: "City must be 3 characters."
    })
    city: string;

    @Column()
    @IsNotEmpty({
        message: "State field cannot be empty."
    })
    @Length(3, 3, {
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
}