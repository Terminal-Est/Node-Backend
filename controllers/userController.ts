import { UserDataSource } from "../data/data-source";
import { User } from "../data/entity/user";
import { Password } from "../data/entity/password";
import { validate } from "class-validator";
var bcrypt = require('bcrypt');

// Get user info from user table.
// TODO: Testing.
async function getUser(userId: string) {
    return await UserDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.userId = :id", {id: userId})
        .getOne();
}

// Get user info from password table.
// TODO: Testing.
async function getUserPassword(userId: string) {
    return await UserDataSource.getRepository(Password)
        .createQueryBuilder("password")
        .where("password.userId = :id", {id: userId})
        .getOne();
}

// TODO: Testing and comments.
async function insertPasswordHash(userId: string, hashPass: string) {
    return await UserDataSource.createQueryBuilder()
        .insert()
        .into(Password)
        .values([
            { userId: userId, passHash: hashPass }
        ])
        .execute();
}

// TODO: Testing and comments.
async function updatePasswordHash(userId: string, hashPass: string) {
    return await UserDataSource.createQueryBuilder()
        .update(Password)
        .set({ passHash: hashPass })
        .where("userId = :id", {id: userId})
        .execute();
}

// 
// TODO: Design and carry out correct testing.
async function getHash(pass: string) {
    return new Promise (function(reject, resolve) {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(error: any, salt: any) {
            if (error) {
                return reject(error);
            }
            bcrypt.hash(pass, salt, function(error: any, hash: any) {
                if (error) {
                    return reject (error);
                }
                else {
                    return resolve(hash);
                }
            })
        })
    });
}

// Added data validation for creating users returns 400 and an error
// for the front end.
async function createUser(
    userId: string, 
    admin: boolean, 
    auth: boolean, 
    username: string,
    address: string,
    city: string,
    state: string,
    postcode: string
    ) {

    var user = new User();
    user.userId = userId;
    user.admin = admin;
    user.auth = auth;
    user.username = username;
    user.address = address;
    user.city = city;
    user.state = state;
    user.postcode = postcode;

    const errors = await validate(user);

    if (errors.length > 0)
    {
        throw new Error(errors.toString());
    } else {
        return await UserDataSource.createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { 
                    userId: userId, 
                    admin: admin, 
                    auth: auth, 
                    username: username,
                    address: address,
                    city: city,
                    state: state,
                    postcode: postcode
                }
            ])
            .printSql()
            .execute();
    }
}

// TODO Testing and comments.
async function setUserAthenticated(userId: string, auth: boolean) {
    return await UserDataSource.createQueryBuilder()
        .update(User)
        .set({ auth: auth })
        .where("userId = :id", {id: userId})
        .execute();
}

module.exports = { getUser,
    insertPasswordHash,
    updatePasswordHash,
    getHash, 
    createUser, 
    setUserAthenticated }; 
