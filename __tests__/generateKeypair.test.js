const request = require('supertest');
const baseURL = "http://localhost:3000";
/**describe("Generate an RSA keypair", () => {
    test("Should return a keypair", () => {
        
    });
});**/

/**describe("Get an auth token", () => {
    test("Should return a token", async () => {
       var token = await security.getAuthJWT('bobs@burgers.com');
       console.log(token);
    });
});**/

describe("POST /getJWT", () => {
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
        const response = await request(baseURL).post("/getJWT").send(values);
        expect(response.statusCode).toBe(200);
        console.log(response.body);
    })
});