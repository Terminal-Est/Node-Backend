var dbapi = require("../dbapi/dbapi");

describe("Update user_tokens table", () => {
    test("Should update the table", async () => {
        var userInfo = {
            "user_id": "your@email.com",
            "email_token": "random string number 1",
            "ref_token": "random string number 2",
            "column1": "email_token_hash",
            "column2": "ref_token_hash"
        };
        var res1 = await dbapi.setUserToken(userInfo.user_id, userInfo.column1, userInfo.email_token).then(data => {
            return data;
        });
        var res2 = await dbapi.setUserToken(userInfo.user_id, userInfo.column2, userInfo.ref_token).then(data => {
            return data;
        });
        console.log(res1);
        console.log(res2);
    })
});