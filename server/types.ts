export interface UserData {
    uuid: string;
    username: string;
    email: string;
    password: string;
    date: string;
    token: string;
}

export interface UserLoginData {
    username: string;
    password: string;
}