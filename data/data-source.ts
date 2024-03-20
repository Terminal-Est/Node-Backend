import { DataSource } from 'typeorm';
import { User } from './entity/user';
import { Password } from './entity/password';
var logging = require('../utils/logging');

var sqlPort: number = Number(process.env.SQL_SERVER_PORT);

// Sensitive data to be moved to environment variable.
// Logging levels set for dev environment, this will be changed 
// at production deployment.
export const UserDataSource = new DataSource({
    type: "mssql",
    host: process.env.SQL_SERVER,
    port: sqlPort,
    username: process.env.SQL_SERVER_PII_LOGIN,
    password: process.env.SQL_SERVER_PII_PASSWORD,
    database: process.env.SQL_SERVER_PII_DB,
    entities: [User, Password],
    logging: ["error", "schema"],
    connectionTimeout: 60000
})

export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.SQL_SERVER,
    port: sqlPort,
    username: process.env.SQL_SERVER_DATA_LOGIN,
    password: process.env.SQL_SERVER_DATA_PASSWORD,
    database: process.env.SQL_SERVER_DATA_DB,
    logging: ["error", "schema"],
    connectionTimeout: 60000
});

AppDataSource.initialize()
    .then(() => {
        console.log("App data source initilized!");
        logging.logToFile("App data source initilized!");
    })
    .catch((err) => {
        console.log("Error initilizing app data source : " + err);
        logging.logToFile("Error initilizing app data source : " + err);
    })

UserDataSource.initialize()
    .then(() => {
        console.log("User data source initilized!");
        logging.logToFile("User data source initialized!");
    })
    .catch((err) => {
        console.log("Error initilizing user data source : " + err);
        logging.logToFile("Error initilizing user data source : " + err);
    });