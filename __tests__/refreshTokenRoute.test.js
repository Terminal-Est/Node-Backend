const { jest: requiredJest, describe } = require('@jest/globals');
const request = require('supertest');
const baseURL = "http://localhost:3000";

var token = "eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzgwNzcyNzEsInN1YiI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNjc4MDc5MDcxfQ.rHANQSS2iutSgDRfNW0p5JImf4DOm_lym6M06H7-ZGywSpZwDh9hjd8xs4VBsy5Y4qLG5RcoE0J-Je5S-tAlh2bhaOOi5SROrH7FbJJowgeh6WTHk7HrxOI6lpdIViGtwGU8gThGajFVr2BSZ6kBnSTbe5CphSqAqGBgh0BpjB8tm-bqetuiPFoZLL6A_Ohz8-ZgTfq5pRCTZ7OLLPa3A5k60zXOXR54GmHueyaAL7MPgxfy4n3XifNsE1HMsx87RjTI0RSHBcu88XqqddDfFIuNRTaH6nc5y7Z7G-x63KDQ09oHkFMThj6T379-_ulLNs4BjVlPv3_rs9dCRdjq_A";

describe("POST /getJWT", () => {
    var values = {
            "token": token
        }
    test("Should respond 200", async () => {
        requiredJest.setTimeout(() => {}, 10000);
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body.token);
        console.log(token);
        expect(response.statusCode).toBe(200);
    });
    test("Should respond 200", async () => {
        requiredJest.setTimeout(() => {}, 10000);
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body.token);
        console.log(token);
        expect(response.statusCode).toBe(200); 
    });
    test("Should respond 200", async () => {
        requiredJest.setTimeout(() => {}, 10000);
        const response = await request(baseURL).post("/getJWT").send(values);
        const token = (response.body.token);
        console.log(token);
        expect(response.statusCode).toBe(200); 
    });
});
