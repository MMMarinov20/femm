import BaseModel from "./base/BaseModel";
import { ReviewData } from "../types";

class Reviews extends BaseModel {
    constructor() {
        super();
    }

    public readonly registerReview = async (data: ReviewData) => {
        const [rows, fields] = await this._connection.execute(`INSERT INTO reviews (uuid, name, review, date, rating) VALUES (?, ?, ?, ?, ?)`, [data.uuid, data.username, data.review, data.date, data.rating]);
    }
}

const Review = new Reviews();

export default Review;