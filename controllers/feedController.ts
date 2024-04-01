import { AppDataSource } from "../data/data-source";
import { validate } from "class-validator";
import { UserFollows } from "../data/entity/userFollows";
import { Video } from "../data/entity/video";

async function getUserFollows(uuid: string) {

    var userFollows = await AppDataSource.getRepository(UserFollows)
        .createQueryBuilder("userFollows")
        .where("userFollows.uuid = :id", { id: uuid })
        .getMany();

    return new Promise<UserFollows[]>((resolve , reject) => {
        if (userFollows.length == 0) {
            return reject("No Follows Found");
        } else {
            return resolve(userFollows);
        }
    })
}

async function getUserVideos(uuid: string) {
    var userVideos = await AppDataSource.getRepository(Video)
        .createQueryBuilder("userVideos")
        .where("userVideos.uuid = :id", { id: uuid })
        .getMany();
    
    console.log(uuid);

    return new Promise<Video[]>((resolve , reject) => {
        if (userVideos.length == 0) {
            return reject(false);
        } else {
            return resolve(userVideos);
        }
    })
}

export {
    getUserFollows,
    getUserVideos
}