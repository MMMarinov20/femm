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
    const data: Review = {
        id: uuid.v4(),
        name: req.body.name,
        review: req.body.review,
        date: date,
        rating: req.body.rating,
    }
    if(data.name.length === 0) {
        console.log("Name is empty");
        res.send("Name is required")
    } else if(data.review.length === 0) {
        console.log("Review is empty");
        res.send("Review is required")
    } else if((data.rating <= 0) || (data.rating >= 5)) {
        console.log("Rating is empty");
        res.send("Rating is required")
    } else {
        console.log(`User with USERNAME: ${data.name} is trying to write a review`);

        db.query(`INSERT INTO reviews (uuid, name, review, date, rating) VALUES ('${data.id}', '${data.name}', '${data.review}', '${data.date}', '${data.rating}')`, (err: any, result: any) => {
            if(err) {
                console.log(err);
                res.send("Error occured")
            } else {
                console.log(`User with USERNAME: ${data.name} has written a review`);
                res.send("Review has been added")
            }
        })
    }
})

router.get("/getAllReviews", (req: Request, res: Response) => {
    console.log("User is trying to get all reviews");

    db.query(`SELECT * FROM reviews`, (err: any, result: any) => {
        if(err) {
            console.log(err);
            res.send("Error getting reviews")
        } else {
            console.log("User has successfully got all reviews");
            res.send(result)
        }
    })
})

export default router;
