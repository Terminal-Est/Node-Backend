import { AppDataSource, UserDataSource } from "../data/data-source";
import { Group } from "../data/entity/group";
import { UserGroup } from "../data/entity/userGroup";

function getGroups() {
    try {
        return new Promise((resolve, reject) => {
            const gtgroups = AppDataSource.getRepository(Group)
        .createQueryBuilder("Group")
        .getMany();
        return gtgroups;
        })
    } catch (error) {
        console.error(error);
    }
}

    
    
/*
try {
    const value = await myPromise;
    console.log('Promise resolved with value: ' + value);
  } catch (error) {
    console.error('Promise rejected with error: ' + error);
  }
*/

async function joinGroup(uuid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserGroup)
        .values([
            { uuid: uuid, groupid: groupid }
        ])
        .execute();
}

async function addGroup(ID: number, Name: string, Description: string, System: number) {
    return await AppDataSource.createQueryBuilder()
    .insert()
    .into(Group)
    .values([
        {ID: ID, Name: Name, Description: Description, System: System}
    ])
    .execute();
}

export { getGroups, joinGroup, addGroup };