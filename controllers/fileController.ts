import { BlobServiceClient, 
    ContainerClient, 
    BlockBlobClient, 
    StorageSharedKeyCredential, 
    generateBlobSASQueryParameters, 
    BlobSASPermissions } from "@azure/storage-blob";
import { AppDataSource } from "../data/data-source";
import { validate } from "class-validator";
import { Video } from "../data/entity/video";

// move these to env variables.
const sasKey = "m9GyAx3fjQ554KzLQd3D5lQQJtElhOM0ZIm1oY6byhaqShGpXgg6ovUUx3M1RT5Bjp4OQEBLXYo8+ASteExa0g==";
const accountName = "greetikstorage";

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

// Get an array of videos by user ID.
async function getVideos(uuid: string) {
    const videos = await AppDataSource.getRepository(Video)
    .createQueryBuilder("video")
    .where("video.uuid = :id", { id: uuid })
    .getMany();
    return videos;
}

// Get a blob access url for specific blobs on a container.
function getBlobSaS(uuid: string, fileName: string) {
    try {
        const container: string = "u-" + uuid;
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

export {
    getBlobContainerClient,
    getBlobSaS,
    getVideos,
    createBlobStorageContainer,
    deleteBlobStorageContainer,
    createBlobOnContainer,
    validateVideo,
    createVideo,
}
