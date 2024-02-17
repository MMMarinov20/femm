import express from "express";
import { UserController } from "../controllers/UserController";

const router = express.Router();

router.post("/register", UserController.createUser);
router.get("/users/:userId", UserController.getUserById);
router.get("/users/email/:userEmail", UserController.getUserByEmail);
router.delete("/users/:userId", UserController.deleteUser);
router.put("/users/:userId", UserController.updateUser);
router.get("/users", UserController.getAllUsers);

export default router;
