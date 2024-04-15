import { AppDataSource } from "../data/data-source";
import { UserFollows } from "../data/entity/userFollows";
import { Group } from "../data/entity/group";
import { Video } from "../data/entity/video";
import { UserGroup } from "../data/entity/userGroup";

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

async function getGroupFollows(uuid: string) {

    var groupFollows = await AppDataSource.getRepository(UserGroup)
        .createQueryBuilder("groupFollows")
        .where("groupFollows.userid = :id", { id: uuid })
        .getMany();

    return new Promise<UserGroup[]>((resolve , reject) => {
        if (groupFollows.length == 0) {
            return reject("No Follows Found");
        } else {
            return resolve(groupFollows);
        }
    })
}

async function getUsersByGroup(groupId: string) {
    
    var userGroups = await AppDataSource.getRepository(UserGroup)
    .createQueryBuilder("userGroup")
    .where("userGroup.groupid = :id", { id: groupId })
    .getMany();

    return new Promise<UserGroup[]>((resolve , reject) => {
        if (userGroups.length == 0) {
            return reject("No Follows Found");
        } else {
            return resolve(userGroups);
        }
    })
}

async function getUserVideos(uuid: string) {
    var userVideos = await AppDataSource.getRepository(Video)
        .createQueryBuilder("userVideos")
        .where("userVideos.uuid = :id", { id: uuid })
        .getMany();

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
    getUserVideos,
    getGroupFollows,
    getUsersByGroup
}