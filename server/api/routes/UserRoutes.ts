import express from "express";
import { UserController } from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.post("/verify/:token", UserController.verifyUser);
router.use("/users", AuthMiddleware.authenticate);
router.post("/logout", AuthMiddleware.logout);
router.get("/users/getInfo", UserController.getUserById);
router.get("/users/email/:userEmail", UserController.getUserByEmail);
router.delete("/users/:userId", UserController.deleteUser);
router.put("/users/:userId", UserController.updateUser);
router.get("/users", UserController.getAllUsers);

export default router;
