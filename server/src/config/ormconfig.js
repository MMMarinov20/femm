"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "studio",
    synchronize: true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    logging: true,
};
exports.default = ormconfig;
