import { BlobServiceClient, ContainerClient, BlockBlobClient } from "@azure/storage-blob";

var connString: string = String(process.env.AZURE_BLOB_STORAGE);

const blobServiceClient = BlobServiceClient.fromConnectionString(connString);

// Get a named container client.
function getBlobContainerClient(containerName: string) {
    const containerClient: ContainerClient = blobServiceClient.getContainerClient(containerName);
    return containerClient;
}

// Create a blob storage container.
async function createBlobStorageContainer(containerName: string) {
    const containerClient: ContainerClient = getBlobContainerClient(containerName);
    const response = await containerClient.create();
    return response.requestId;
}

// Delete a blob storage container.
async function deleteBlobStorageContainer(containerName: string) {
    const containerClient: ContainerClient = getBlobContainerClient(containerName);
    const response = await containerClient.delete();
    return response.requestId;
}

// Create a blob on a container
async function createBlobOnContainer(containerName: string, pathToFile: string, fileName: string) {
    const containerClient: ContainerClient = getBlobContainerClient(containerName);
    const blobBlockClient: BlockBlobClient = containerClient.getBlockBlobClient(fileName);
    const response = await blobBlockClient.uploadFile(pathToFile);
    return response.requestId;
}

export {
    getBlobContainerClient,
    createBlobStorageContainer,
    deleteBlobStorageContainer,
    createBlobOnContainer,
}
