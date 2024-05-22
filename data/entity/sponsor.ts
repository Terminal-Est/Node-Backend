import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsNotEmpty, IsEmail, IsPostalCode, IsPhoneNumber, IsOptional } from "class-validator";

/**
 * Sponsor entity class. TypeORM class with validation decorators.
 */
@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn()
    sid: number;

    @Column()
    @Length(0, 250, {
        message: "Sponsor name must not exceed 250 characters."
    })
    name: string;

    @Column()
    @Length(0, 450, {
        message: "Sponsor description must not exceed 450 characters."
    })
    description: string;

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
    @IsPhoneNumber('AU')
    pnumber: string;
}