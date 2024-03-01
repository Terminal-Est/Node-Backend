import { AppDataSource } from "../data/data-source";
import { User } from "../data/entity/user";
import { Password } from "../data/entity/Password";

// Get user info from user table.
// TODO: Testing.
async function getUser(userId: string) {
    return await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.userId = :id", {id: userId})
        .getOne();
}

// Get user info from password table.
// TODO: Testing.
async function getUserPassword(userId: string) {
    return await AppDataSource.getRepository(Password)
        .createQueryBuilder("user")
        .where("user.userId = :id", {id: userId})
        .getOne();
}

// TODO: Testing and comments.
async function insertPasswordHash(userId: string, hashPass: string) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Password)
        .values([
            { userId: userId, passHash: hashPass }
        ])
        .execute();
}

// TODO: Testing and comments.
async function updatePasswordHash(userId: string, hashPass: string) {
    return await AppDataSource.createQueryBuilder()
        .update(Password)
        .set({ passHash: hashPass })
        .where("userId = :id", {id: userId})
        .execute();
}

// 
// TODO: Design and carry out correct testing.
async function setPassHash(userId: string, hashPass: string) {
    userId = userId;
    hashPass = hashPass;

    const res : any = await getUserPassword(userId)
                        .then(data => {
                            return data;
                        })
                        .catch((error) => {
                            return error;
                        });

    return new Promise(function(resolve, reject) { 
        const saltRounds = 10;
        const writeDb = (pass: string) => {
            if (res === null) {
                
                insertPasswordHash(userId, pass)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject("Password insert failed: " + error);
                    });
            
            } else {

                updatePasswordHash(userId, pass)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject("Password update failed: " + error)
                    });
            }
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

// TODO Testing and comments.
async function createUser(userId: string, admin: boolean, auth: boolean, userName: string) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { userId: userId, admin: admin, auth: auth, username: userName }
        ])
        .execute();
}

// TODO Testing and comments.
async function setUserAthenticated(userId: string, auth: boolean) {
    return await AppDataSource.createQueryBuilder()
        .update(User)
        .set({ auth: auth })
        .where("userId = :id", {id: userId})
        .execute();
}

module.exports = { getUser,
    setPassHash, 
    createUser, 
    setUserAthenticated }; 
