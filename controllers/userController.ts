import { UserDataSource } from "../data/data-source";
import { User } from "../data/entity/user";
import { Password } from "../data/entity/password";
import { validate } from "class-validator";
import { PasswordValid } from "../data/entity/passwordValid";
var bcrypt = require('bcrypt');

// Get user info from user table.
// TODO: Testing.
async function getUser(userId: string) {
    return await UserDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.userId = :id", {id: userId})
        .getOne();
}

async function validatePassword(password: string) {
    var passwordValid = new PasswordValid();
    passwordValid.password = password;
    var errors = await validate(passwordValid);
    return new Promise(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
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
                    return reject(error);
                }
                else {
                    return resolve(hash);
                }
            })
        })
    });
}

async function validateUser(user: User) {
    const errors = await validate(user)
    return new Promise(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

// Added data validation for creating users returns 400 and an error
// for the front end.
async function createUser(user: User) {
    return await UserDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { 
                userId: user.userId, 
                admin: user.admin, 
                auth: user.auth, 
                username: user.username,
                address: user.address,
                city: user.city,
                state: user.state,
                postcode: user.postcode
            }
        ])
        .printSql()
        .execute();
}

// TODO Testing and comments.
async function setUserAthenticated(userId: string, auth: boolean) {
    return await UserDataSource.createQueryBuilder()
        .update(User)
        .set({ auth: auth })
        .where("userId = :id", {id: userId})
        .execute();
}

export { getUser,
    getUserPassword,
    insertPasswordHash,
    updatePasswordHash,
    getHash, 
    createUser, 
    setUserAthenticated,
    validateUser,
    validatePassword }; 
