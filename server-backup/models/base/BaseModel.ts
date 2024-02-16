import mysql2, {Connection} from "mysql2/promise";
import {db} from "../../dbconfig";
export default abstract class BaseModel {
    // @ts-ignore
    protected _connection: Connection;

    protected constructor() {
         mysql2.createConnection(db).then((Connection) => {
            this._connection = Connection;
            console.log('Connection established');
        });
    }
}