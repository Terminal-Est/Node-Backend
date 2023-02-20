var dbapi = require("../dbapi/dbapi");

describe("Add user to DB", () => {
    test("Should add user to DB", async () => {
        let userInfo = {
            "userId": "john@deer.com",
            "org": "JohnDeer",
            "admin": 0,
            "auth": 0,
            "userName": "John"
        }
        var res = await dbapi.addUser(userInfo.userId, 
            userInfo.org, 
            userInfo.admin, 
            userInfo.auth, 
            userInfo.userName).then(data => {
            return data;
        });
        console.log(res);
    })
});