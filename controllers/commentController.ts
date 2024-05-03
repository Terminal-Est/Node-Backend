import { validate } from "class-validator";
import { GroupComment } from "../data/entity/groupComment";
import { VideoComment } from "../data/entity/videoComment";
import { AppDataSource } from "../data/data-source";
var Filter = require("bad-words");

function isCommentProfane(comment: string) {
    const filter = new Filter();
    return filter.isProfane(comment);
}

async function validateComment(comment: any) {
    var errors = await validate(comment);
    return new Promise<boolean>((resolve, reject) => {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            resolve(true);
        }
    })
}

async function addUserGroupComment(comment: GroupComment) {
    var ts: number = Date.now();
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(GroupComment)
        .values([
            { 
                groupId: comment.groupId,
                uuid: comment.uuid,
                comment: comment.comment,
                likes: comment.likes,
                replyId: comment.replyId,
                timestamp: String(ts)
            }
        ])
        .execute();
}

async function addUserVideoComment(comment: VideoComment) {
    var ts: number = Date.now();
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(VideoComment)
        .values([
            { 
                videoId: comment.videoId,
                uuid: comment.uuid,
                comment: comment.comment,
                likes: comment.likes,
                replyId: comment.replyId,
                timestamp: String(ts)
            }
        ])
        .execute();
}

async function getCommentsByGroup(groupid: number) {
    var comments = await AppDataSource.getRepository(GroupComment)
        .createQueryBuilder("comments")
        .where("comments.groupId = :id", { id: groupid })
        .getMany();

    return new Promise<GroupComment[]>((resolve, reject) => {
        if (comments.length == 0) {
            return reject("No Comments Found");
        } else {
            return resolve(comments);
        }
    });
}

async function getCommentsByVideo(videoId: string) {
    var comments = await AppDataSource.getRepository(VideoComment)
        .createQueryBuilder("comments")
        .where("comments.videoId = :id", { id: videoId })
        .getMany();

    return new Promise<VideoComment[]>((resolve, reject) => {
        if (comments.length == 0) {
            return reject("No Comments Found");
        } else {
            return resolve(comments);
        }
    });
}

async function getGroupCommentsByUUID(groupid: number, uuid: string) {
    var comments = await AppDataSource.getRepository(GroupComment)
        .createQueryBuilder("comments")
        .where("comments.groupId = :id", { id: groupid })
        .andWhere("comments.uuid = :uuid", { uuid: Number(uuid) })
        .getMany();
       
    return new Promise<GroupComment[]>((resolve, reject) => {
        if (comments.length == 0) {
            return reject("No Comments Found");
        } else {
            return resolve(comments);
        }
    });
}

async function getVideoCommentsByUUID(videoid: string, uuid: string) {
    var comments = await AppDataSource.getRepository(VideoComment)
        .createQueryBuilder("comments")
        .where("comments.videoId = :id", { id: videoid })
        .andWhere("comments.uuid = :uuid", { uuid: Number(uuid) })
        .getMany();

    return new Promise<VideoComment[]>((resolve, reject) => {
        if (comments.length == 0) {
            return reject("No Comments Found");
        } else {
            return resolve(comments);
        }
    });
}

async function getUserVideoComment(uuid: string, commentId: number) {
    var comment = await AppDataSource.getRepository(VideoComment)
        .createQueryBuilder("comment")
        .where("comment.commentId = :id", { id: commentId })
        .andWhere("comment.uuid = :uuid", { uuid: Number(uuid) })
        .getOne();

    return new Promise<VideoComment>((resolve, reject) => {
        if (!comment) {
            return reject("No Comment Found");
        } else {
            return resolve(comment);
        }
    });
}

async function getUserGroupComment(uuid: string, commentId: number) {
    var comment = await AppDataSource.getRepository(GroupComment)
        .createQueryBuilder("comment")
        .where("comment.commentId = :id", { id: commentId })
        .andWhere("comment.uuid = :uuid", { uuid: Number(uuid) })
        .getOne();

    return new Promise<GroupComment>((resolve, reject) => {
        if (!comment) {
            return reject("No Comment Found");
        } else {
            return resolve(comment);
        }
    });
}

async function deleteUserVideoComment(uuid: string, commentId: number) {
    var result = await AppDataSource.getRepository(VideoComment)
        .createQueryBuilder("comment")
        .delete()
        .where("commentId = :id", { id: commentId })
        .andWhere("uuid = :uuid", { uuid: Number(uuid) })
        .execute();

    return result;
}

async function deleteUserGroupComment(uuid: string, commentId: number) {
    var result = await AppDataSource.getRepository(GroupComment)
        .createQueryBuilder("comment")
        .delete()
        .where("commentId = :id", { id: commentId })
        .andWhere("uuid = :uuid", { uuid: Number(uuid) })
        .execute();
      
    return result;
}

async function updateUserGroupComment(uuid: string, commentId: number, comment: string, timestamp: string) {
    var result = await AppDataSource.createQueryBuilder()
        .update(GroupComment)
        .set({ 
            comment: comment,
            timestamp: timestamp
        })
        .where("commentId = :id", { id: commentId })
        .andWhere("uuid = :uuid", { uuid: Number(uuid) })
        .execute();
    return result;
}

async function updateUserVideoComment(uuid: string, commentId: number, comment: string, timestamp: string) {
    var result = await AppDataSource.createQueryBuilder()
        .update(VideoComment)
        .set({ 
            comment: comment,
            timestamp: timestamp
         })
        .where("commentId = :id", { id: commentId })
        .andWhere("uuid = :uuid", { uuid: Number(uuid) })
        .execute()

    return result;
}

async function getAllVideoComments() {
    var comments: VideoComment[] = await AppDataSource.getRepository(VideoComment)
        .createQueryBuilder("comments")
        .getMany();

    return comments;
}

async function getAllGroupComments() {
    var comments: GroupComment[] = await AppDataSource.getRepository(GroupComment)
        .createQueryBuilder("comments")
        .getMany();

    return comments;
}

export {
    isCommentProfane,
    validateComment,
    addUserGroupComment,
    addUserVideoComment,
    getCommentsByGroup,
    getCommentsByVideo,
    getGroupCommentsByUUID,
    getVideoCommentsByUUID,
    getUserGroupComment,
    getUserVideoComment,
    deleteUserGroupComment,
    deleteUserVideoComment,
    updateUserGroupComment,
    updateUserVideoComment,
    getAllGroupComments,
    getAllVideoComments
}