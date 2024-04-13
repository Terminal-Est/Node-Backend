import { AppDataSource } from "../data/data-source"
import { Like } from "../data/entity/like"

async function getLikes(videoid: string) {
    return await AppDataSource
        .getRepository(Like)
        .createQueryBuilder()
        .where("videoid = :videoid", { videoid: videoid })
        .getMany()
}

async function getLike(tempLike: any) {
    return await AppDataSource
        .getRepository(Like)
        .createQueryBuilder()
        .where("uuid = :uuid", { uuid: tempLike.uuid })
        .andWhere("videoid = :videoid", { videoid: tempLike.videoID })
        .getOne();
}

async function addLike(tempLike: any) {
    return await AppDataSource
        .createQueryBuilder()
        .insert()
        .into(Like)
        .values([
            { uuid: tempLike.uuid, videoID: tempLike.videoID }
        ])
        .execute()
}

async function removeLike(tempLike: any) {
    return await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Like)
        .where("uuid = :uuid", { uuid: tempLike.uuid })
        .andWhere("videoid = :videoid", { videoid: tempLike.videoid })
        .execute()
}

export { getLikes, addLike, removeLike, getLike }