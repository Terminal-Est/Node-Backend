import { InsertResult } from "typeorm";
import { AppDataSource } from "../data/data-source";
import { Categories } from "../data/entity/category";

async function getCategories() {
     return await AppDataSource.getRepository(Categories)
          .createQueryBuilder()
          .getMany(); 
}

async function getCategoryByID(categoryid: number) {
     return await AppDataSource.getRepository(Categories)
          .createQueryBuilder("categories")
          .where("categories.ID = :categoryid", { categoryid: categoryid })
          .getOne();
}

async function addCategory(tempCategory: Categories) {
     const result: InsertResult = await AppDataSource.createQueryBuilder()
     .insert()
     .into(Categories)
     .values([
          {
               Name: tempCategory.Name, 
               Icon_FileName: tempCategory.Icon_FileName, 
               Background_FileName: tempCategory.Background_FileName, 
               Image_TimeStamp: tempCategory.Image_TimeStamp
          }
     ])
     .execute();

     return result;
 }

 async function updateCategory(tempCategory: Categories) {
     return await AppDataSource
     .createQueryBuilder()
     .update(Categories)
     .set({Background_FileName: tempCategory.Background_FileName, Icon_FileName: tempCategory.Icon_FileName})
     .where("ID = :id", {id: tempCategory.ID})
     .execute();
}

export { getCategories, getCategoryByID, addCategory, updateCategory };