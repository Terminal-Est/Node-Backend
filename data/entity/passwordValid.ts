import { IsStrongPassword, IsNotEmpty } from "class-validator"

export class PasswordValid {

    @IsStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: "Password must contain at least 1 uppercase, 1 number and 1 character."
    })
    @IsNotEmpty({
        message: "Password can't be empty."
    })
    password: string;

}