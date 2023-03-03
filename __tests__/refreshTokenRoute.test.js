const request = require('supertest');
const baseURL = "http://localhost:3000";

describe("POST /getJWT", () => {
    
    var loop = 0;
    var values = {
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc4MjA5NjAsInN1YiI6ImpvaG5Ac21pdGguY29tIiwiaWF0IjoxNjc3ODE3MzYwLCJraWQiOiJmbEpVMnE3cThZOFpaOXA4WjhfS0QyWDM3OTM4b25MNWJuMERUbkpKd05nIn0.DHR318DOk2wKhQphSV1DUlWyJw6EqSzkzOU7O0O1DU9LfWVlVe2N7K0zd0TJiw_V4FQL75Y3uw9IpIKyPvigdRePyI3EZAO7NL2FYiponAEqoOE3XPl-GbeXsINPknRXwcPODCmM2zE82LyFz2KQPtMMI-WTTiBoCgzs1pTktblN9szvOgjnhRgrd_fb9w8s1lv3i41ysP2gGJZe3qGerNASqigXdTldbuqPKGWG9FI2QJMwlEQfwOjVxESpWY1GZlDsMJRNWHJnh2-cuM8AXUJPZ7m3xdDfFBp0OqMsrQADCTj0Abn6XOD0nFdoadEADTltq_uGPHLQkid7KDiK1A"
        }

    while(loop < 10) {
        it("Should respond 200", async () => {
                const response = await request(baseURL).post("/getJWT").send(values);
                console.log(response.body);
                values = response.body;
                expect(response.statusCode).toBe(200); 
        });
        loop++; 
    }
});