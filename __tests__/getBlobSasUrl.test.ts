import { getBlobSaS } from '../controllers/fileController';

test('Get Blob SaS url', () => {
    const url = getBlobSaS('17', 'video_1711462700053.mp4');
    console.log(url);
    expect(typeof url).toBe('string');
});
