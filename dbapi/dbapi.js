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
function queryUser(table, userId, org) {
    return new Promise(function(resolve, reject) {
        this.table = table;
        this.userId = userId; 
        this.org = org; 
        const con = connection()
        const sql = mysql.format('SELECT * FROM ?? WHERE user_id = ? AND organisation = ?', 
        [this.table, this.userId, this.org]);
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
function setUserState(userId, org, loggedIn) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        this.userId = userId;
        this.org = org;
        this.loggedIn = loggedIn;
        const sql = mysql.format('UPDATE user_state SET logged_in = ? WHERE user_id = ? AND organisation = ?', 
        [this.loggedIn, this.userId, this.org]);
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
async function setPassHash(userId, org, hashPass) {
    const con = connection();
    this.userId = userId;
    this.org = org;
    this.hashPass = hashPass;
    const outer = this;
    const res = await queryUser("user_password", this.userId, this.org).then(data => {
        return data;
    });
    return new Promise(function(resolve, reject) { 
        const saltRounds = 10;
        const writeDb = (pass) => {
            if (res[0] == null) {
                const sql = mysql.format('INSERT INTO user_password SET user_id = ?, organisation = ?, pass_hash = ?', 
                [outer.userId, outer.org, pass]);
                con.query(
                    sql,
                    function(error, result) {
                        return error ? reject(error) : resolve(result);
                    }
                );
            } else {
                const sql = mysql.format('UPDATE user_password SET pass_hash = ? WHERE user_id = ? AND organisation = ?', 
                ['user_password', pass, outer.userId, outer.org]);
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
        const sql = mysql.format('INSERT INTO user SET user_id = ?, organisation = ?, admin = ?, authenticated = ?, username = ?'
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

function setUserAthenticated(userId, org, auth) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        this.userId = userId;
        this.org = org;
        this.auth = auth;
        const sql = mysql.format('UPDATE user SET authenticated = ? WHERE user_id = ? AND organisation = ?', 
        [this.auth, this.userId, this.org]);
        con.query(
            sql,
            function(error, result) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

module.exports = { queryUser, 
    setUserState, 
    setPassHash, 
    addUser, 
    setUserAthenticated }; 
