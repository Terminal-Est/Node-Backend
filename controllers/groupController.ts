import { InsertResult } from "typeorm";
import { AppDataSource, UserDataSource } from "../data/data-source";
import { Group } from "../data/entity/group";
import { UserGroup } from "../data/entity/userGroup";
import { GroupVideos } from "../data/entity/groupVideos";

async function getGroups() {
    const groups = await AppDataSource.getRepository(Group)
    .createQueryBuilder()
    .getMany();
    return groups;
}

async function getGroupByID(groupid: number) {
    return await AppDataSource.getRepository(Group)
        .createQueryBuilder("group")
        .where("group.ID = :groupid", {groupid: groupid})
        .getOne();
}

async function getGroupByCategoryID(categoryid: number) {
    return await AppDataSource.getRepository(Group)
        .createQueryBuilder("group")
        .where("group.CategoryID = :categoryid", {categoryid: categoryid})
        .getMany();
}

async function joinGroup(userid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserGroup)
        .values([
            { 
                userid: userid, 
                groupid: groupid }
        ])
        .execute();
}

async function getVideosByGroup(groupId: number) {
    const videos: GroupVideos[] = await AppDataSource.getRepository(GroupVideos)
        .createQueryBuilder('videos')
        .where('videos.groupId = :id', {id: groupId})
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
                Image_TimeStamp: tempGroup.Image_TimeStamp}
        ])
        .execute();
        return result;
}

export { getGroups, 
    joinGroup, 
    addGroup, 
    getGroupByID, 
    getGroupByCategoryID,
    getVideosByGroup
};
