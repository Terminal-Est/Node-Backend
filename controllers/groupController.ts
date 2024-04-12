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

async function joinGroup(userid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserGroup)
        .values([
            { userid: userid, groupid: groupid }
        ])
        .execute();
}

async function addGroup(Name: string, Description: string, System: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Group)
        .values([
            {Name: Name, Description: Description, System: System}
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

export { 
    getGroups, 
    joinGroup, 
    addGroup,
    getVideosByGroup };