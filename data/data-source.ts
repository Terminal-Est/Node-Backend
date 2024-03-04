import { DataSource } from "typeorm";
var logging = require('../utils/logging');

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "progprojdb.database.windows.net",
    port: 1433,
    username: "progprojadmin",
    password: "Arrow_Couch_72@",
    database: "ProgProjDB",
    logging: ["error"],
    migrations: ['dist/migrations/*.js']
});

AppDataSource.initialize()
    .then(() => {
        logging.logToFile("Data source initialized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing data source : " + err);
    })