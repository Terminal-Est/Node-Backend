import { IsStrongPassword, IsNotEmpty } from "class-validator"

/**
 * Password validator class. This class is only used for validating
 * passwords and isn't a database entity.
 */
export class PasswordValid {

    @IsStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: "Password must contain at least 1 uppercase, 1 number and 1 character and be a minimum of 10 characters."
    })
    @IsNotEmpty({
        message: "Password can't be empty."
    })
    password: string;

}