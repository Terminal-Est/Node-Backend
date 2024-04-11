import { AppDataSource } from "../data/data-source";
import { UserFollows } from "../data/entity/userFollows";
import { validate } from "class-validator";

async function validateUserFollows(userFollows: UserFollows) {
    const errors = await validate(userFollows)
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

async function creatUserFollow(uuid: string, uuidFollowing: string) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserFollows)
        .values([
            { 
                uuid: Number(uuid),
                uuidFollowing: Number(uuidFollowing)
            }
        ])
        .execute();
}

async function deleteUserFollowing(uuid: string, uuidFollowing: string) {
    return await AppDataSource.getRepository(UserFollows)
        .createQueryBuilder("unfollow")
        .delete()
        .where("unfollow.uuid = :id", { id: uuid })
        .andWhere("unfollow.uuidfollowing = :id", { id: uuidFollowing })
        .execute();
}

export {
    validateUserFollows,
    creatUserFollow,
    deleteUserFollowing
}