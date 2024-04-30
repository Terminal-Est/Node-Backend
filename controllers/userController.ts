import { AppDataSource, UserDataSource } from "../data/data-source";
import { User } from "../data/entity/user";
import { Password } from "../data/entity/password";
import { validate } from "class-validator";
import { PasswordValid } from "../data/entity/passwordValid";
import { Uuid } from "../data/entity/uuid";
var bcrypt = require('bcrypt');

// Get user object from email address.
async function getUserEmail(email: string) {
    var promise = await UserDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :id", {id: email})
        .getOne();
    return new Promise<User>((resolve, reject) => {
        if (promise != null) {
            var user: User = promise;
            return resolve(user);
        } else {
            return reject(false);
        }
    })
}

// Get a user object based on UUID.
async function getUserUUID(uuid: string) {
    var promise = await UserDataSource.getRepository(User)
        .createQueryBuilder("user")
        .where("user.uuid = :id", {id: uuid})
        .getOne();
    return new Promise<User>((resolve, reject) => {
        if (promise != null) {
            var user: User = promise;
            return resolve(user);
        } else {
            return reject(false);
        }
    })
}

// Validate user supplied password against class validator parameters.
async function validatePassword(password: string) {
    var passwordValid = new PasswordValid();
    passwordValid.password = password;
    var errors = await validate(passwordValid);
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

// Get user password hash based on UUID.
async function getUserPassword(uuid: number) {
    return await UserDataSource.getRepository(Password)
        .createQueryBuilder("password")
        .where("password.uuid = :id", {id: uuid})
        .getOne();
}

// TODO: Testing and comments.
async function insertPasswordHash(uuid: number, hashPass: string) {
    return await UserDataSource.createQueryBuilder()
        .insert()
        .into(Password)
        .values([
            { uuid: uuid, passHash: hashPass }
        ])
        .execute();
}

// Update user password hash based in supplied UUID.
async function updatePasswordHash(uuid: number, hashPass: string) {
    return await UserDataSource.createQueryBuilder()
        .update(Password)
        .set({ passHash: hashPass })
        .where("uuid = :id", {id: uuid})
        .execute();
}

// 
// Get a password hash using bcrypt.
async function getHash(pass: string) {
    return new Promise(function(reject, resolve) {
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

// Validate user details against class validator.
async function validateUser(user: User) {
    const errors = await validate(user)
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

// Create a user in PII database.
async function createUser(user: User) {
    return await UserDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { 
                email: user.email,
                admin: user.admin, 
                auth: user.auth, 
                username: user.username,
                dob: user.dob,
                address: user.address,
                city: user.city,
                state: user.state,
                postcode: user.postcode,
                avatar: user.avatar,
                fname: user.fname,
                lname: user.lname
            }
        ])
        .execute();
}

// Insert Uuid into user data database.
async function createDataUser(userId: Uuid) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Uuid)
        .values([
            { 
                uuid: userId.uuid
            }
        ])
        .execute();
}

// Set user authenticated based on supplied email.
async function setUserAthenticated(uuid: string, auth: boolean) {
    return await UserDataSource.createQueryBuilder()
        .update(User)
        .set({ auth: auth })
        .where("uuid = :id", {id: uuid})
        .execute();
}

async function updateUser(user: User) {
    return await UserDataSource.createQueryBuilder()
        .update(User)
        .set({
            email: user.email,
            address: user.address,
            city: user.city,
            state: user.state,
            postcode: user.postcode,
            avatar: user.avatar,
            fname: user.fname,
            lname: user.lname
        })
        .where("uuid = :id", {id: user.uuid})
        .execute();
}

export { getUserEmail,
    getUserUUID,
    getUserPassword,
    insertPasswordHash,
    updatePasswordHash,
    getHash, 
    createUser,
    createDataUser, 
    setUserAthenticated,
    validateUser,
    validatePassword,
    updateUser
 }; 
