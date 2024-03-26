import { getBlobSaS } from '../controllers/fileController';

test('Get Blob SaS url', () => {
    getBlobSaS('17', 'video_1711424307134.mp4').then((fulfilled: any) => {
        console.log(fulfilled);
        expect(typeof fulfilled).toBe('string');
    })
});
