import { AppDataSource } from "../data/data-source";
import { User } from "../data/entity/user";

// TODO: Design and carry out correct testing.
// TODO: Comment.
async function getUser(userId: string) {
    const user = await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.userId = :id", {id: userId})
        .getOne();

    return new Promise(function(resolve, reject) {
        return user ? reject("User not found.") : resolve(user);
    });
}

// TODO: Design and carry out correct testing.
// TODO: Comment.
async function setPassHash(userId: any, hashPass: any) {
    const con = connection();
    userId = userId;
    hashPass = hashPass;
    const res : any = await getUser("user_password", userId).then(data => {
        return data;
    });
    return new Promise(function(resolve, reject) { 
        const saltRounds = 10;
        const writeDb = (pass: any) => {
            if (res[0] === null) {
                const sql = mysql.format('INSERT INTO user_password SET user_id = ?, pass_hash = ?', 
                [userId, pass]);
                con.query(
                    sql,
                    function(error: any, result: unknown) {
                        return error ? reject(error) : resolve(result);
                    }
                );
            } else {
                const sql = mysql.format('UPDATE user_password SET pass_hash = ? WHERE user_id = ?', 
                ['user_password', pass, userId]);
                con.query(
                    sql,
                    function(error: any, result: unknown) {
                        return error ? reject(error) : resolve(result);
                    }
                );
            }
            con.end();
        }
        bcrypt.genSalt(saltRounds, function(error: any, salt: any) {
            if (error) reject(error);
            bcrypt.hash(hashPass, salt, function(error: any, hash: any) {
                if (error) reject(error);
                writeDb(hash);
            });
        });
    });
}

function createUser(userId: any, admin: any, auth: any, userName: any) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        userId = userId;
        admin = admin;
        auth = auth;
        userName = userName;
        const sql = mysql.format('INSERT INTO user SET user_id = ?, admin = ?, authenticated = ?, username = ?'
                                , [userId, admin, auth, userName]);
        con.query(
            sql,
            function(error: any, result: unknown) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

function setUserAthenticated(userId: any, auth: any) {
    return new Promise(function(resolve, reject) {
        const con = connection();
        userId = userId;
        auth = auth;
        const sql = mysql.format('UPDATE user SET authenticated = ? WHERE user_id = ?', 
        [auth, userId]);
        con.query(
            sql,
            function(error: any, result: unknown) {
                return error ? reject(error) : resolve(result);
            }
        );
        con.end();
    });
}

module.exports = { getUser,
    setPassHash, 
    createUser, 
    setUserAthenticated }; 
