import express, { Express, Request, Response, Router } from "express";
import db from "../DB/dbconfig";
const router: Router = express.Router();
db.query("SELECT 1,2");
export default router;
