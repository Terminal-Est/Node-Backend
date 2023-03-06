const { jest: requiredJest, describe } = require('@jest/globals');
const request = require('supertest');
const baseURL = "http://localhost:3000";

var jwt = "eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzgxMzc4MjQsInN1YiI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNjc4MTM5NjI0LCJraWQiOiJMaDRRa2RtNE0zWXRLV09lZzU5aWY3em5NWUZuX3hKek9Sb3FXUmIzMHk4In0.tGHC3yBYrbXhdq981QAT0ThbtOXfB1WM4HN7X4xndxOlBZWR0zpoNlIhCmioMzIUP2lIS0UAnM_WZyrBTxrMpU7hBJPxRFsgXJjyKmCkPvoUUn1cwgObTc8Mf5xHSg3KWrTzJPZTf_81b5MrCzAROaVnSMLrpQYkvuLd8eqE7wi9dNRA5FwKhKcw0kIqK4_F-0rHJAtfin0qer4tDxtCwoTWZTHVRRqnEVxjBOc_l-T6VOH5aDdIuChU6NBKfxaVtdqRFOEGFqZVkuoZF41wKQDm4vOsMB5B8SLd5uHF8Ka-rNWcnco6bkVOvPj6EY_28g2hg7bHlCwj3-roGHJy5g";

describe("POST /validateJWT", () => {
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/validateJWT").set({ Authorization: jwt });
        jwt = (response.body.token);
        console.log(jwt);
        expect(response.statusCode).toBe(200);
    });
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/validateJWT").set({ Authorization: jwt });
        jwt = (response.body.token);
        console.log(jwt);
        expect(response.statusCode).toBe(200); 
    });
    test("Should respond 200", async () => {
        const response = await request(baseURL).post("/validateJWT").set({ Authorization: jwt });
        jwt = (response.body.token);
        console.log(jwt);
        expect(response.statusCode).toBe(200); 
    });
});
