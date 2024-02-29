import { DataSource } from "typeorm";
var logging = require('../utils/logging');

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"
});

AppDataSource.initialize()
    .then(() => {
        logging.logToFile("Data source initialized!");
    })
    .catch((err) => {
        logging.logToFile("Error initilizing data source : " + err);
    })