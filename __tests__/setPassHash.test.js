var dbapi = require("../dbapi/dbapi");

describe("Update user_password table", () => {
    test("Should update the table", async () => {
        var userInfo = {
            "user_id": "s3172455@student.rmit.edu.au",
            "pass_hash": "EatDirt"
        };
        var res = await dbapi.setPassHash(userInfo).then(data => {
            return data;
        });
        console.log(res);
    })
});