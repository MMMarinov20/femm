import express from "express";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.post("/auth/login", AuthMiddleware.login);
router.post("/auth/register", AuthMiddleware.register);

export default router;
