import { BlobServiceClient, ContainerClient, BlockBlobClient } from "@azure/storage-blob";
import { AppDataSource } from "../data/data-source";
import { validate } from "class-validator";
import { Video } from "../data/entity/video";

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
                timestamp: video.timestamp
            }
        ])
        .execute();
}

export {
    getBlobContainerClient,
    createBlobStorageContainer,
    deleteBlobStorageContainer,
    createBlobOnContainer,
    validateVideo,
    createVideo,
}
