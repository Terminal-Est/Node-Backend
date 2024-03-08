var request = require('supertest');

// Example jest test;
describe('GET /test', () => {
    it("return status code 200", async () => {
        const res = await request('http://localhost:3000')
            .get('/test')
            .send({password: "test"})
        expect(res.statusCode).toEqual(200);
        console.log(res.text);
    })
});