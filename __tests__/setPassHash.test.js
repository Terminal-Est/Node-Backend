var dbapi = require("../dbapi/dbapi");

describe("Update user_password table", () => {
    test("Should update the table", async () => {
        var userInfo = {
            "user_id": "your@email.com",
            "organisation": "Verify",
            "pass_hash": "Bfg5000-1"
        };
        var res = await dbapi.setPassHash(userInfo.user_id, userInfo.organisation, userInfo.pass_hash).then(data => {
            return data;
        });
        console.log(res);
    })
});