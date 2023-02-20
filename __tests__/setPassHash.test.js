var dbapi = require("../dbapi/dbapi");

describe("Update user_password table", () => {
    test("Should update the table", async () => {
        var userInfo = {
            "user_id": "your@email.com",
            "pass_hash": "Benin :DDD"
        };
        var res = await dbapi.setPassHash(userInfo.user_id, userInfo.pass_hash).then(data => {
            return data;
        });
        console.log(res);
    })
});