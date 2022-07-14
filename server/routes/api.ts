import express, { Express, Request, Response, Router } from "express";
import * as uuid from 'uuid';
import moment from 'moment';
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import randToken from "rand-token";
import User from "../models/User";
import { UserData } from "../types";
import { UserLoginData } from "../types";
import {stringify} from "flatted";

const router: Router = express.Router();

router.use(bodyParser.json());

// @ts-ignore
router.use(session({
    secret: "loli",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 3600000, // 1 hour
    },
}))

router.get("/", (req: Request, res: Response) => {
    res.send("Invalid API endpoint")
})

router.post("/register", (req: Request, res: Response) => {
    const USERNAME_REGEX = new RegExp(/^(?=.{3,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/);
    const PASSWORD_REGEX = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const token = randToken.generate(60);

    const data: UserData = {
        uuid: uuid.v4(),
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        date: date,
        token: token
    }

    if(!data.username.match(USERNAME_REGEX)) {
        console.log("Invalid username");
        res.send("Invalid username");
    } else if(!data.password.match(PASSWORD_REGEX)) {
        console.log("Invalid password");
        res.send("Invalid password");
    } else if(!data.email.match(EMAIL_REGEX)) {
        console.log("Invalid email");
        res.send("Invalid email");
    } else {
        User.registerUser(data).then(() => {
            // @ts-ignore
            req.session.uuid = data.uuid;
            console.log("User registered");
            res.send("User registered");
        }).catch(err => {
            console.error('User already exists');
            res.send("User already exists");
        });
    }

})

router.post("/login", (req: Request, res: Response) => {
    const data: UserLoginData = {
        username: req.body.username,
        password: req.body.password
    }

    User.loginUser(data).then(user => {
        if(user) {
            // @ts-ignore
            req.session.uuid = user.uuid;
            console.log("User logged in");
            res.send('User logged in');
        } else {
            console.log("Invalid username or password");
            res.send("Invalid username or password");
        }
    }).catch(err => {
        console.error('Invalid username or password');
        res.send("Invalid username or password");
    })
})

router.get("/logout", (req: Request, res: Response) => {
    // @ts-ignore
    if(req.session.uuid) {
        req.session.destroy(err => {
            if(err) {
                console.error(err);
                res.send("Error logging out");
            } else {
                console.log("User logged out");
                res.send("User logged out");
            }
        })
    } else {
        console.log("User not logged in");
        res.send("User not logged in");
    }
})
export default router;
