import { DataSource } from "typeorm";
import { User } from './entity/user';
import { Password } from './entity/password';
var logging = require('../utils/logging');

// Sensitive data to be moved to environment variable.
// Logging levels set for dev environment, this will be changed 
// at production deployment.
export const UserDataSource = new DataSource({
    type: "mssql",
    host: "progprojdb.database.windows.net",
    port: 1433,
    username: "app_user_login",
    password: "Modern_Skates_054",
    database: "ProgProjDB",
    entities: [User, Password],
    logging: ["error", "query", "schema"],
    migrations: ['dist/migrations/*.js']
});

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "progprojdb.database.windows.net",
    port: 1433,
    username: "app_data_login",
    password: "Distinct_Iguana_670",
    database: "ProgProjAppDb",
    logging: ["error", "query", "schema"]
});

UserDataSource.initialize()
    .then(() => {
        logging.logToFile("User data source initialized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing user data source : " + err);
    });

AppDataSource.initialize()
    .then(() => {
        logging.logToFile("App data source initilized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing app data source : " + err);
    });

//  username: "progprojadmin", password: "Arrow_Couch_72@",
