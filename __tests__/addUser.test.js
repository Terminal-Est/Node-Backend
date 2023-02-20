var dbapi = require("../dbapi/dbapi");

describe("Add user to DB", () => {
    test("Should add user to DB", async () => {
        let userInfo = {
            "userId": "my@home.com",
            "org": "Haliburton",
            "admin": 0,
            "auth": 0,
            "userName": "Harold"
        }
        var res = await dbapi.addUser(userInfo).then(data => {
            return data;
        });
        console.log(res);
    })
});