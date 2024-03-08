var request = require('supertest');

// Example jest test;
describe('post /', () => {
    it("return status code 200", async () => {
        const res = await request('http://localhost:3000')
            .post('/addUser')
            .send({userId: "test", admin: 0, auth: 0, username: "test", password: "test"})
        expect(res.statusCode).toEqual(200);
        console.log(res.text);
    })
});