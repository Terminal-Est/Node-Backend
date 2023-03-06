const { test, expect } = require("@jest/globals");
var dbapi = require("../dbapi/dbapi");

describe("Add user to DB", (userId = "John@deer.com", org = "JohnDeer", admin = 0, auth = 0, name = "John", password = "Bfg5000-1") => {
    test("Should add user to DB", async () => {
        await dbapi.addUser(userId, 
            org, 
            admin, 
            auth, 
            name).then(data => {
            expect(data).toEqual({ fieldCount: 0, affectedRows: 1, insertId: 0, serverStatus: 2, warningCount: 0, message: '', protocol41: true, changedRows: 0 });
        });
    });
    test("Should add password hash", async () => {
        await dbapi.setPassHash(userId, org, password).then(data => {
            expect(data).toEqual({ fieldCount: 0, affectedRows: 1, insertId: 0, serverStatus: 2, warningCount: 0, message: '', protocol41: true, changedRows: 0 });
        });
    })
});