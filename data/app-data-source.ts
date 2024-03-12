import { DataSource } from "typeorm";
var logging = require('../utils/logging');

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "progprojdb.database.windows.net",
    port: 1433,
    username: "app_data_login",
    password: "Distinct_Iguana_670",
    database: "ProgProjAppDb",
    logging: ["error", "query", "schema"],
    migrations: ['dist/migrations/*.js']
});

AppDataSource.initialize()
    .then(() => {
        logging.logToFile("App data source initilized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing app data source : " + err);
    })