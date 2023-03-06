const { jest: requiredJest, describe } = require('@jest/globals');
const request = require('supertest');
const baseURL = "http://localhost:3000";

var token = "eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzgxMDk0MzgsInN1YiI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNjc4MTExMjM4LCJraWQiOiJYNXVvRHk3RVQzdXp3cjFwQ25Da01OWmZjM2VaSjVRVVVCOTlnV3llMlJrIn0.MykXzB9eTwb8mq-33nux8E7J2XJFXln4oSdeye5frr5Z9g7HjpRj-GATGWnjZqn-dvgw0J6HR-qE54KRQ4eSNBWp9Vv6ibB3c0XGRg5tghzt27YbXsmLPHVGZC2yXjfSfewTXLziZQGQxq1RwVtaxAQO7t_EH73U4d1CYwxKETUgHoUceUohqmNz8Qb_fpsYvYGm-1HaXRLEXIckTkfEYhGVEqXS26_cCfPNc5lwSB78WkNOkvQN1jdHlyHwTgGuxzujnrDwC3yVxSwUqy8lfvp36xz7QIQqfIZfu3-Q_I4nJPDqbfPKyg7sL0HHEvSpbyJFXkYWMmnkTIDzOyf8tg";

describe("POST /getJWT", () => {
    var values = {
            "token": token
        }
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body);
        console.log(token);
        expect(response.statusCode).toBe(400);
    });
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body);
        console.log(token);
        expect(response.statusCode).toBe(400); 
    });
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body);
        console.log(token);
        expect(response.statusCode).toBe(400); 
    });
});
