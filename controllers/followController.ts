import { AppDataSource } from "../data/data-source";
import { UserFollows } from "../data/entity/userFollows";
import { validate } from "class-validator";

async function validateUserFollows(userFollows: UserFollows) {
    const errors = await validate(UserFollows)
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

