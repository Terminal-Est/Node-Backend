import { BlobServiceClient } from '@azure/storage-blob';

const account = "progprojstorage";
// to be moved to environment variable.
const connstring = "DefaultEndpointsProtocol=https;AccountName=progprojstorage;AccountKey=gmyRkOGmcgUuRUlNxok4GkuZMBmO4o1KYHniizWYqIsxI3JJy0hE4GOx/DsY8FRcrxF/nW8SFgoI+AStcI1+wQ==;EndpointSuffix=core.windows.net";
const blobServiceClient = BlobServiceClient.fromConnectionString(connstring);

export async function createContainer(containerName: string) {

    const container = containerName;
    const containerClient = blobServiceClient.getContainerClient(container);
    const getContainerResponse = await containerClient.create();

    return new Promise(function(resolve) {
        return resolve(getContainerResponse);
    });
}

export async function deleteContainer(containerName: string) {

    const container = containerName;
    const containerClient = blobServiceClient.getContainerClient(container);
    const getContainerResponse = await containerClient.delete();

    return new Promise(function(resolve) {
        return resolve(getContainerResponse.requestId);
    });
}

