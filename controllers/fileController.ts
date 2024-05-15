import { BlobServiceClient, 
    ContainerClient, 
    BlockBlobClient, 
    StorageSharedKeyCredential, 
    generateBlobSASQueryParameters, 
    BlobSASPermissions,
    BlobDeleteOptions } from "@azure/storage-blob";
import { AppDataSource } from "../data/data-source";
import { validate } from "class-validator";
import { Video } from "../data/entity/video";

const sasKey: string = String(process.env.SAS_KEY);
const accountName: string = String(process.env.ACCOUNT_NAME);
var connString: string = String(process.env.AZURE_BLOB_STORAGE);
const blobServiceClient = BlobServiceClient.fromConnectionString(connString);

// Get a named container client.
function getBlobContainerClient(containerName: string) {
    try {
        const containerClient: ContainerClient = blobServiceClient.getContainerClient(containerName);
        return containerClient;
    } catch (e) {
        throw e;
    }
}

// Create a blob storage container.
async function createBlobStorageContainer(containerName: string) {
    try {
        const containerClient: ContainerClient = getBlobContainerClient(containerName);
        const response = await containerClient.create();
        return response.requestId;
    } catch (e) {
        throw e;
    }
}

// Delete a blob storage container.
async function deleteBlobStorageContainer(containerName: string) {
    try {
        const containerClient: ContainerClient = getBlobContainerClient(containerName);
        const response = await containerClient.delete();
        return response.requestId;
    } catch (e) {
        throw e;
    }
}

async function deleteBlobFromContainer(containerName: string, blobName: string) {
    try {
        const containerClient: ContainerClient = getBlobContainerClient(containerName);
        const blobBlockClient: BlockBlobClient = containerClient.getBlockBlobClient(blobName);
        const blobDeleteOptions: BlobDeleteOptions = {
        }
        const response = await blobBlockClient.delete(blobDeleteOptions);
        return response.requestId;
    } catch (e) {
        throw e;
    }
}

// Create a blob on a container
async function createBlobOnContainer(containerName: string, pathToFile: string, fileName: string) {
    try {
        const containerClient: ContainerClient = getBlobContainerClient(containerName);
        const blobBlockClient: BlockBlobClient = containerClient.getBlockBlobClient(fileName);
        const response = await blobBlockClient.uploadFile(pathToFile);
        return response.requestId;
    } catch (e) {
        throw e;
    } 
}

// Validate video data.
async function validateVideo(video: Video) {
    const errors = await validate(video)
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

// Add video data to database.
async function createVideo(video: Video) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Video)
        .values([
            { 
                videoId: video.videoId,
                uuid: video.uuid,
                title: video.title,
                description: video.description,
                timestamp: video.timestamp,
                weight: video.weight,
                sid: video.sid
            }
        ])
        .execute();
}

// Delete a video from the database.
async function deleteVideo(video: string, uuid: string) {
    return await AppDataSource.createQueryBuilder()
        .delete()
        .from(Video)
        .where("videoid = :video", { video: video })
        .andWhere("uuid = :uuid", { uuid: Number(uuid) })
        .execute();
}

// Get a video from the database based on video ID.
async function getVideo(videoId: string) {
    return await AppDataSource.getRepository(Video)
        .createQueryBuilder("video")
        .where("videoid = :video", { video: videoId })
        .getOne();
}

// Get a blob access url for specific blobs on a container.
function getBlobSaS(container: string, fileName: string) {
    try {
        const creds = new StorageSharedKeyCredential(accountName, sasKey);
        const blobServiceClient: BlobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, creds);
        const client = blobServiceClient.getContainerClient(container);
        const blobClient = client.getBlobClient(fileName);
    
        const blobSaS = generateBlobSASQueryParameters({
            containerName: container,
            blobName: fileName,
            permissions: BlobSASPermissions.parse("r"),
            startsOn: new Date(),
            expiresOn: new Date(new Date().valueOf() + 600000)
        }
        ,creds).toString();
       
        const sasUrl: string = blobClient.url + "?" + blobSaS;
        return sasUrl;
    } catch (e) {
        throw e;
    }
}

async function flagVideo(vid: string, flag: boolean) {
    return await AppDataSource.createQueryBuilder()
    .update(Video)
    .set({
        flagged: flag
    })
    .where("videoid = :id", {id: vid})
    .execute();
}

export {
    getBlobContainerClient,
    getBlobSaS,
    createBlobStorageContainer,
    deleteBlobStorageContainer,
    createBlobOnContainer,
    validateVideo,
    createVideo,
    deleteVideo,
    getVideo,
    deleteBlobFromContainer,
    flagVideo
}
