import { DataSourceOptions } from "typeorm";

const ormconfig: DataSourceOptions = {
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

export default ormconfig;
