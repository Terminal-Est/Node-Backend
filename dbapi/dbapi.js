var mysql = require('mysql');

// TODO: Add exception handling to queries where the db engine might return an exception.

const connection = () => {
    let con = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "Bfg5000-1",
        database: "user_information"
    });
    return con;
}

// TODO: Design and carry out correct testing.
// TODO: Comment.
function queryUser(userInfo) {
    return new Promise(function(resolve, reject) {
        let table = string.userInfo["table"];
        let column = userInfo["column"];
        let search = userInfo["search"];
        let con = connection()
        let sql = mysql.format('SELECT * FROM ?? WHERE ?? = ?', [table, column, search]);
        con.query(
            sql, 
            function(error, result) {
                return error ? reject(error) : resolve(result);     
        });
        con.end();
    });
}

// TODO: Design and carry out correct testing.
// TODO: Comment.
function setUserState(userInfo) {
    return new Promise(function(resolve, reject) {
        let con = connection();
        let uid = userInfo["userId"];
        let loggedIn = userInfo["loggedIn"];
        let sql = 'UPDATE user_state SET logged_in = ? WHERE user_id = ?';
        con.query(
            sql,
            [loggedIn, uid],
            function(error, result) {
               return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

// TODO: Design and carry out correct testing.
// TODO: Comment.
async function setPassHash(userInfo) {
    let con = connection();
    let uid = userInfo["user_id"];
    let hashPass = userInfo["pass_hash"];
    let queryInfo = {
        "table": "user_password",
        "column": "user_id",
        "search": uid
    }
    var res = await queryUser(queryInfo, /**Replace this**/"test").then(data => {
        return data;
    });
    return new Promise(function(resolve, reject) { 
        if (res[0] == null) {
            let sql = mysql.format('INSERT INTO ?? SET user_id = ?, pass_hash = ?', ['user_password', uid, hashPass]);
            con.query(
                sql,
                function(error, result) {
                    return error ? reject(error) : resolve(result);
                }
            );
        } else {
            let sql = mysql.format('UPDATE ?? SET pass_hash = ? WHERE user_id = ?', ['user_password', hashPass, uid]);
            con.query(
                sql,
                function(error, result) {
                    return error ? reject(error) : resolve(result);
                }
            );
        }
        con.end();
    });
}

function addUser(userInfo) {
    return new Promise(function(resolve, reject) {
        let con = connection();
        let user = userInfo["userId"];
        let org = userInfo["org"];
        let admin = userInfo["admin"];
        let auth = userInfo["auth"];
        let userName = userInfo["userName"];
        let sql = mysql.format('INSERT INTO user SET id = ?, organisation = ?, admin = ?, authenticated = ?, username = ?'
                                , [user, org, admin, auth, userName]);
        con.query(
            sql,
            function(error, result) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

module.exports = { queryUser, setUserState, setPassHash, addUser }; 
