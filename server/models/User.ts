import BaseModel from "./base/BaseModel";
import {stringify} from "flatted";
import {UserData} from "../types";

class Users extends BaseModel {
    public readonly USERNAME_REGEX: RegExp = new RegExp(/^(?=.{3,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/);
    public readonly PASSWORD_REGEX: RegExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    public readonly EMAIL_REGEX: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    constructor() {
        super();
    }

    public registerUser = async (data: UserData) => {
        const [rows, fields] = await this._connection.execute(`INSERT INTO users (uuid, username, email, password, date, token) VALUES (?, ?, ?, ?, ?, ?)`, [data.uuid, data.username, data.email, data.password, data.date, data.token]);
        // console.log(rows);
        // console.log(fields);
    }
}

const User = new Users();

export default User;

