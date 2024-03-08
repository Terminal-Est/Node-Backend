import { DataSource } from "typeorm";
import { User } from './entity/user';
import { Password } from './entity/password';
var logging = require('../utils/logging');

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "progprojdb.database.windows.net",
    port: 1433,
    username: "progprojadmin",
    password: "Arrow_Couch_72@",
    database: "ProgProjDB",
    entities: [User, Password],
    logging: ["error", "query", "schema"],
    migrations: ['dist/migrations/*.js']
});

AppDataSource.initialize()
    .then(() => {
        logging.logToFile("Data source initialized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing data source : " + err);
    })