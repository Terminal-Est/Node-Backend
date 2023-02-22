const request = require('supertest');
const baseURL = "http://localhost:3000";

describe("POST /addUser", () => {
    var values = 
        {
            "userId": "jims@mowing.com",
            "org": "Haliburton",
            "password": "helloWorld",
            "admin": 0,
            "auth": 0,
            "username": "Jim"
        }
    it("Should respond 200", async () => {
        const response = await request(baseURL).post("/addUser").send(values);
        expect(response.statusCode).toBe(200);
        console.log(response.body);
    })
});