import BaseModel from "./base/BaseModel";
import {UserData} from "../types";

class Users extends BaseModel {
    constructor() {
        super();
    }

    public registerUser = (data: UserData) => {
        return this._connection.query('INSERT INTO users (uuid, username, email, password, date, token) VALUES (?, ?, ?, ?, ?, ?)',
            [data.uuid, data.username, data.email, data.password, data.date , data.token],
            (err: any, result: any) => {
                if(err) {
                    return null;
                } else {
                    return result;
                }
        });
    }
}

const User = new Users();

export default User;

