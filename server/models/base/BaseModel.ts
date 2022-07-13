import mysql2, {Connection} from "mysql2";
import {db} from "../../dbconfig";
export default abstract class BaseModel {
    protected readonly _connection: Connection;

    protected constructor() {
        this._connection = mysql2.createConnection(db);
        this._connection.connect((err: any) => {
            if(err) {
                throw err;
            }
            console.log("Connected to database");
        });
    }
}