var dbapi = require("../dbapi/dbapi");

describe("Update user_state table", () => {
    test("Should update the table", async () => {
        var userInfo = {
            "userId": "s3172455@student.rmit.edu.au",
            "loggedIn": 1
        };
        var res = await dbapi.setUserState(userInfo).then(data => {
            return data;
        });
        console.log(res);
    })
});