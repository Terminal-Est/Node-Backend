var dbapi = require("../dbapi/dbapi");

describe("Get result of query", () => {
    test("Should return a query", async () => {
        var i = 0;
        let userInfo = {
            "table": "user",
            "column": "id",
            "search": "s3172455@student.rmit.edu.au"
        }
        var res = await dbapi.queryUser(userInfo.table, userInfo.column, userInfo.search).then(data => {
            return data;
        });
        console.log(res);
        i++;
    })
});
