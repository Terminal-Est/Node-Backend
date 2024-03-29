import { AppDataSource, UserDataSource } from "../data/data-source";
import { Group } from "../data/entity/group";
import { UserGroup } from "../data/entity/userGroup";

async function getGroups() {
    return await AppDataSource.getRepository(Group)
    .createQueryBuilder("group")
    .getMany();
}

async function joinGroup() {uuid: number, groupid: number) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Group)
        .values([
            { uuid: Number, groupid: Number }
        ])
        .execute();
}