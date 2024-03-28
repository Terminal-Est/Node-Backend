import { createBlobStorageContainer } from '../controllers/fileController';

test('Create azure file storage container', () => {
    createBlobStorageContainer('test').then((fulfilled: any) => {
        console.log(fulfilled);
        expect(typeof fulfilled).toBe('string');
    })
});
