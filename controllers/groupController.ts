import { InsertResult } from "typeorm";
import { AppDataSource } from "../data/data-source";
import { Group } from "../data/entity/group";
import { UserGroup } from "../data/entity/userGroup";
import { GroupVideos } from "../data/entity/groupVideos";

async function getGroups() {
    const groups = await AppDataSource.getRepository(Group)
        .createQueryBuilder()
        .getMany();
    return groups;
}

async function getUsersByGroup(groupid: number) {
    var userGroups = await AppDataSource.getRepository(UserGroup)
        .createQueryBuilder("userGroup")
        .where("userGroup.groupid = :id", { id: groupid })
        .getMany();

    return new Promise<UserGroup[]>((resolve, reject) => {
        if (userGroups.length == 0) {
            return reject("No Users Found");
        } else {
            return resolve(userGroups);
        }
    })
}

async function getGroupByID(groupid: number) {
    return await AppDataSource.getRepository(Group)
        .createQueryBuilder("group")
        .where("group.ID = :groupid", { groupid: groupid })
        .getOne();
}

async function getGroupsByUserID(userid: number) {
    return await AppDataSource.getRepository(UserGroup)
        .createQueryBuilder()
        .where("userid = :id", { id: userid })
        .getMany();
}

async function getGroupsByCategoryID(categoryid: number) {
    return await AppDataSource.getRepository(Group)
        .createQueryBuilder("group")
        .where("group.CategoryID = :id", { id: categoryid })
        .getMany();
}

async function joinGroup(userid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserGroup)
        .values([
            {
                userid: userid,
                groupid: groupid
            }
        ])
        .execute();
}

async function getVideosByGroup(groupId: number) {
    const videos: GroupVideos[] = await AppDataSource.getRepository(GroupVideos)
        .createQueryBuilder('videos')
        .where('videos.groupId = :id', { id: groupId })
        .getMany();
    return videos;
}

async function addGroup(tempGroup: Group) {
    const result: InsertResult = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Group)
        .values([
            {
                Name: tempGroup.Name,
                Description: tempGroup.Description,
                System: tempGroup.System,
                Location: tempGroup.Location,
                Background_FileName: tempGroup.Background_FileName,
                Image_TimeStamp: tempGroup.Image_TimeStamp
            }
        ])
        .execute();
    return result;
}

async function addVideoToGroup(groupVideo: GroupVideos) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(GroupVideos)
        .values([
            {
                groupId: groupVideo.groupId,
                videoId: groupVideo.videoId
            }
        ])
        .execute();
}

export {
    getGroups,
    joinGroup,
    addGroup,
    getGroupByID,
    getVideosByGroup,
    addVideoToGroup,
    getUsersByGroup,
    getGroupsByCategoryID,
    getGroupsByUserID
};
