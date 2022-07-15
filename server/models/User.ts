import BaseModel from "./base/BaseModel";
import {stringify} from "flatted";
import {UserData} from "../types";
import {UserLoginData} from "../types";
import bcrypt from "bcrypt";

class Users extends BaseModel {
    public readonly USERNAME_REGEX: RegExp = new RegExp(/^(?=.{3,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/);
    public readonly PASSWORD_REGEX: RegExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    public readonly EMAIL_REGEX: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    constructor() {
        super();
    }

    public readonly registerUser = async (data: UserData) => {
        const [rows, fields] = await this._connection.execute(`INSERT INTO users (uuid, username, email, password, date, token) VALUES (?, ?, ?, ?, ?, ?)`, [data.uuid, data.username, data.email, data.password, data.date, data.token]);
    }

    public readonly loginUser = async (data: UserLoginData) => {
        const [rows, fields] = await this._connection.execute(`SELECT * FROM users WHERE username = ?`, [data.username]);
        // @ts-ignore
        if(rows.length === 0) {
            return false;
        } else {
            // @ts-ignore
            const user = rows[0];
            if(bcrypt.compareSync(data.password, user.password)) {
                return user;
            } else {
                return false;
            }
        }
    }

    public readonly getUser = async (uuid: string) => {
        const [rows, fields] = await this._connection.execute(`SELECT uuid, username, role, email, date FROM users WHERE uuid = ?`, [uuid]);
        // @ts-ignore
        if(rows.length === 0) {
            return false;
        } else {
            // @ts-ignore
            return rows[0];
        }
    }
}

const User = new Users();

export default User;

