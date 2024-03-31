import { AppDataSource, UserDataSource } from "../data/data-source";
import { Group } from "../data/entity/group";
import { UserGroup } from "../data/entity/userGroup";

async function getGroups() {
    const groups = await AppDataSource.getRepository(Group).createQueryBuilder().getMany();
    return groups;
}

async function joinGroup(uuid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserGroup)
        .values([
            { uuid: uuid, groupid: groupid }
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

export { getGroups, joinGroup, addGroup };