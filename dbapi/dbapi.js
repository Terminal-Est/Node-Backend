var mysql = require('mysql');
var bcrypt = require('bcrypt');

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
function queryUser(table, column, search) {
    return new Promise(function(resolve, reject) {
        this.table = table;
        this.column = column; 
        this.search = search; 
        const con = connection()
        const sql = mysql.format('SELECT * FROM ?? WHERE ?? = ?', [this.table, this.column, this.search]);
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
function setUserState(userId, loggedIn) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        this.userId = userId;
        this.loggedIn = loggedIn;
        const sql = mysql.format('UPDATE user_state SET logged_in = ? WHERE user_id = ?', [this.loggedIn, this.userId]);
        con.query(
            sql,
            function(error, result) {
               return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

// TODO: Design and carry out correct testing.
// TODO: Comment.
async function setPassHash(userId, hashPass) {
    const con = connection();
    this.userId = userId;
    this.hashPass = hashPass;
    const outer = this;
    const res = await queryUser("user_password", "user_id", this.userId).then(data => {
        return data;
    });
    return new Promise(function(resolve, reject) { 
        const saltRounds = 10;
        const writeDb = (pass) => {
            if (res[0] == null) {
                const sql = mysql.format('INSERT INTO ?? SET user_id = ?, pass_hash = ?', ['user_password', outer.userId, pass]);
                con.query(
                    sql,
                    function(error, result) {
                        return error ? reject(error) : resolve(result);
                    }
                );
            } else {
                const sql = mysql.format('UPDATE ?? SET pass_hash = ? WHERE user_id = ?', ['user_password', pass, outer.userId]);
                con.query(
                    sql,
                    function(error, result) {
                        return error ? reject(error) : resolve(result);
                    }
                );
            }
            con.end();
        }
        bcrypt.genSalt(saltRounds, function(error, salt) {
            if (error) reject(error);
            bcrypt.hash(outer.hashPass, salt, function(error, hash) {
                if (error) reject(error);
                writeDb(hash);
            });
        });
    });
}

function addUser(userId, org, admin, auth, userName) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        this.userId = userId;
        this.org = org;
        this.admin = admin;
        this.auth = auth;
        this.userName = userName;
        const sql = mysql.format('INSERT INTO user SET id = ?, organisation = ?, admin = ?, authenticated = ?, username = ?'
                                , [this.userId, this.org, this.admin, this.auth, this.userName]);
        con.query(
            sql,
            function(error, result) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

async function setUserToken(userId, column, token) {
    const con = connection();
    this.userId = userId;
    this.token = token;
    this.column = column;
    const outer = this;
    const res = await queryUser("user_tokens", "user_id", this.userId).then(data => {
        return data;
    });
    return new Promise(function(resolve, reject) { 
        if (res[0] == null) {
            const sql = mysql.format('INSERT INTO ?? SET user_id = ?, ?? = ?', ['user_tokens', outer.userId, outer.column, outer.token]);
            con.query(
                sql,
                function(error, result) {
                    return error ? reject(error) : resolve(result);
                }
            );
        } else {
            const sql = mysql.format('UPDATE ?? SET ?? = ? WHERE user_id = ?', ['user_tokens', outer.column, outer.token, outer.userId]);
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

function setUserAthenticated(userId, auth) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        this.userId = userId;
        this.auth = auth;
        const sql = mysql.format('UPDATE user SET authenticated = ? WHERE id = ?', [this.auth, this.userId]);
        con.query(
            sql,
            function(error, result) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

module.exports = { queryUser, setUserState, setPassHash, addUser, setUserToken, setUserAthenticated }; 
