import express from "express";
import { RequestFormController } from "../controllers/RequestFormController";

const router = express.Router();

router.get("/requests/:Id", RequestFormController.getRequestById);
router.post("/requests", RequestFormController.createRequest);

export default router;
