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

    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    const data: UserData = {
        uuid: uuid.v4(),
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        date: date,
        token: ""
    }
    // res.send(JSON.stringify(User.registerUser(data)));

    if(stringify(User.registerUser(data))) {
        console.log('User registered');
        res.send('User registered');
    }
    //

    //
    // const USERNAME_REGEX: RegExp = new RegExp(/^(?=.{3,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/);
    // const PASSWORD_REGEX: RegExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    // const EMAIL_REGEX: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    //
    // if(!data.username.match(USERNAME_REGEX)) {
    //     console.log("Username should be between 8-20 characters long, has no special characters at the beginning or at the end");
    //     res.status(400).send("Username should be between 8-20 characters long, has no special characters at the beginning or at the end");
    // }
    // else if(!data.password.match(PASSWORD_REGEX)) {
    //     console.log("Password should be at least 8 characters long, has at least one uppercase letter, one lowercase letter, one number and one special character");
    //     res.status(400).send("Password should be at least 8 characters long, has at least one uppercase letter, one lowercase letter, one number and one special character");
    // }
    // else if(!data.email.match(EMAIL_REGEX)) {
    //     console.log("Email is not valid");
    //     res.status(400).send("Email is not valid");
    // } else {
    //     db.query('SELECT * FROM users WHERE username = (?) OR email = (?)', [data.username, data.email], (err: any, result: any) => {
    //         if(err) {
    //             console.log(err);
    //             res.status(500).send("Internal server error");
    //         } else if(result.length > 0) {
    //             if(data.username === result[0].username) {
    //                 console.log("Username already exists");
    //                 res.status(400).send("Username already exists");
    //             } else if(data.email === result[0].email) {
    //                 console.log("Email already exists");
    //                 res.status(400).send("Email already exists");
    //             }
    //         } else {
    //             data.token = randToken.generate(60);
    //             db.query('INSERT INTO users (uuid, username, email, password, date, token) VALUES (?, ?, ?, ?, ?, ?)', [data.uuid, data.username, data.email, data.password, data.date, data.token], (err: any, result: any) => {
    //                 if(err) {
    //                     console.log(err);
    //                     res.status(500).send("Internal server error");
    //                 } else {
    //                     console.log("User registered");
    //                     res.status(201).send("User registered");
    //                 }
    //             })
    //         }
    //     })
    // }
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
