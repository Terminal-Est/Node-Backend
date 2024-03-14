import { createContainer, deleteContainer } from '../data/azure-blob';

test('Create azure file storage container', () => {
    createContainer('test').then((fulfilled: any) => {
        console.log(fulfilled);
    })
});

test('delete azure file storage container', () => {
    deleteContainer('test').then((fulfilled: any) => {
       console.log(fulfilled);
    })
})