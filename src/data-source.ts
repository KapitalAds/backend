import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact } from "./entity/Contact"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "57.129.41.197",
    port: 3306,
    username: "paulo",
    password: "pass!!",
    database: "kapital",
    synchronize: true,
    logging: false,
    entities: [Contact],
    migrations: [],
    subscribers: [],
})
