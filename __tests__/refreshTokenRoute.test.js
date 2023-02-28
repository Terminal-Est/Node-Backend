const request = require('supertest');
const baseURL = "http://localhost:3000";

describe("POST /getJWT", () => {
    var values = 
        {
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc1NjIyMDAsInN1YiI6ImZvb0BiYXIuY29tIiwiaWF0IjoxNjc3NTU4NjAwfQ.cPrJftt6hdDn49gKcmdLipKTdC45lzEr05N5I_IaillvQcfKRVBTN81GVA4CzCnjKZ-OupB4Nk4PVlcNtCjOP7Thlik_PeHGlWAFTJGqXLkNOF-8xqOMm1KvT74zHUH4LzdhWgOCuUn7TdONiqcvIZbC7GptW1eGMlka5cLacFHJ0BGu628E2wCyNkwH7c8cuyfCym7ay8AQkNbx234106Bfl741erfVw6BV9O0HyuT-eKzdu_1CJfy3f3xLn6JG7bXjcbTEPHTHk5LjIVJcjUwZvBZv1fz-qL5UbWip8S-dARFOCiqirMBIcMxVnm78W7mnM2x2UqYXEV8ZZGhEtQ"
        }
    it("Should respond 200", async () => {
        const response = await request(baseURL).post("/getJWT").send(values);
        expect(response.statusCode).toBe(400);
        console.log(response.body);
    })
});