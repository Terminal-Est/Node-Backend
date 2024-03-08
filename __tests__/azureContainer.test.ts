import { Any } from 'typeorm';
import { createContainer } from '../data/azure-blob';

test('Create azure file storage container', () => {
    createContainer('test').then((fulfilled: any) => {
        expect(fulfilled).toBe(Any);
    })
});