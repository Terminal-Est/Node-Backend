import { AppDataSource, UserDataSource } from "../data/data-source";
import { Categories } from "../data/entity/category";
import { UserGroup } from "../data/entity/userGroup";

async function getCategories() {
     return await AppDataSource.getRepository(Categories).createQueryBuilder().getMany();
    
}

export { getCategories };