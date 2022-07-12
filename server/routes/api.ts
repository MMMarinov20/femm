import express, { Express, Request, Response, Router } from "express";
import * as uuid from 'uuid';
import moment from 'moment';
import bodyParser from "body-parser";
import db from "../DB/dbconfig";

const router: Router = express.Router();

router.use(bodyParser.json());

router.get("/", (req: Request, res: Response) => {
    res.send("Invalid API endpoint")
})

router.post("/review", (req: Request, res: Response) => {
    interface Review {
        id: string;
        name: string;
        review: string;
        date: string;
        rating: number;
    }

    const date: string = moment().format('YYYY-MM-DD HH:mm:ss');
    const data: any[] =  [
        uuid.v4(),
        req.body.name,
        req.body.review,
        date,
        req.body.rating,
    ]
    if(data[1].length === 0) {
        console.log("Name is empty");
        res.send("Name is required")
    } else if(data[2].length === 0) {
        console.log("Review is empty");
        res.send("Review is required")
    } else if(data[4].length === 0) {
        console.log("Rating is empty");
        res.send("Rating is required")
    } else {
        console.log(`User with USERNAME: ${data[1]} is trying to write a review`);

        db.query(`INSERT INTO reviews (uuid, name, review, date, rating) VALUES (?, ?, ?, ?, ?)`, data, (err: any, result: any) => {
            if(err) {
                console.log(err);
                res.send("Error writing review")
            } else {
                console.log(`User with USERNAME: ${data[1]} has written a review`);
                res.send("Review written successfully")
            }
        }
        )
    }



})

export default router;
