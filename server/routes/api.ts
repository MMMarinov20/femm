import express, { Express, Request, Response, Router } from "express";
import * as uuid from 'uuid';
import moment from 'moment';
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import randToken from "rand-token";
import User from "../models/User";
import { UserData } from "../types";
import {stringify} from "flatted";

const router: Router = express.Router();

router.use(bodyParser.json());

router.use(session({
    secret: "loli",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 3600000, // 1 hour
    }
}))

router.get("/", (req: Request, res: Response) => {
    res.send("Invalid API endpoint")
})

router.post("/register", (req: Request, res: Response) => {
    const USERNAME_REGEX = new RegExp(/^(?=.{3,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/);
    const PASSWORD_REGEX = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    const data: UserData = {
        uuid: uuid.v4(),
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        date: date,
        token: ""
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
            console.log("User registered");
            res.send("User registered");
        }).catch(err => {
            console.error('User already exists');
            res.send("User already exists");
        });
    }


})

// router.post("/login", (req: Request, res: Response) => {
//     interface User {
//         username: string;
//         password: string;
//     }
//
//     const data: User = {
//         username: req.body.username,
//         password: req.body.password
//     }
//
//     db.query('SELECT * FROM users WHERE username = (?)', [data.username], (err: any, result: any) => {
//         if(err) {
//             console.log(err);
//             res.status(500).send("Internal server error");
//         } else if(result.length === 0) {
//             console.log("User does not exist");
//             res.status(400).send("User does not exist");
//         } else {
//             if(bcrypt.compareSync(data.password, result[0].password)) {
//                 console.log("User logged in");
//                 res.status(200).send("User logged in");
//             } else {
//                 console.log("Password is incorrect");
//                 res.status(400).send("Password is incorrect");
//             }
//         }
//     })
// })
//
// router.post("/logout", (req: Request, res: Response) => {})
//
// router.post("/review", (req: Request, res: Response) => {
//     interface Review {
//         id: string;
//         name: string;
//         review: string;
//         date: string;
//         rating: number;
//     }
//
//     const date: string = moment().format('YYYY-MM-DD HH:mm:ss');
//     const data: Review = {
//         id: uuid.v4(),
//         name: req.body.name,
//         review: req.body.review,
//         date: date,
//         rating: req.body.rating,
//     }
//     if(data.name.length === 0) {
//         console.log("Name is empty");
//         res.send("Name is required")
//     } else if(data.review.length === 0) {
//         console.log("Review is empty");
//         res.send("Review is required")
//     } else if((data.rating <= 0) || (data.rating >= 5)) {
//         console.log("Rating is empty");
//         res.send("Rating is required")
//     } else {
//         console.log(`User with USERNAME: ${data.name} is trying to write a review`);
//
//         db.query(`INSERT INTO reviews (uuid, name, review, date, rating) VALUES ('${data.id}', '${data.name}', '${data.review}', '${data.date}', '${data.rating}')`, (err: any, result: any) => {
//             if(err) {
//                 console.log(err);
//                 res.send("Error occurred")
//             } else {
//                 console.log(`User with USERNAME: ${data.name} has written a review`);
//                 res.send("Review has been added")
//             }
//         })
//     }
// })
//
// router.get("/getAllReviews", (req: Request, res: Response) => {
//     console.log("User is trying to get all reviews");
//
//     db.query(`SELECT * FROM reviews`, (err: any, result: any) => {
//         if(err) {
//             console.log(err);
//             res.send("Error getting reviews")
//         } else {
//             console.log("User has successfully got all reviews");
//             res.send(result)
//         }
//     })
// })

export default router;
