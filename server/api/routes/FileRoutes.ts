import express from "express";

import { FileController } from "../controllers/FileController";

const router = express.Router();

router.get("/download/:filename", FileController.downloadFile);

export default router;
