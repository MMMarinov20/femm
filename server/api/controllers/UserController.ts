import { Request, Response } from "express";
import * as UserModel from "../models/User";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "../middlewares/AuthMiddleware";

export const UserController = {
  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      // const cookie = req.headers.cookie;
      // const token = cookie?.split("=")[1];
      const cookies = parseCookies(req.headers.cookie || "");
      const token = cookies.token;

      if (token) {
        const id: number = (jwtDecode(token) as { id: number }).id;
        const user = await UserModel.findUserById(id);
        user
          ? res.status(200).json(user)
          : res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Could not fetch user" });
    }
  },

  async getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const userEmail: string = req.params.userEmail;
      const user = await UserModel.findUserByEmail(userEmail);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Could not fetch user" });
    }
  },

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId: number = parseInt(req.params.userId, 10);
      await UserModel.deleteUser(userId);
      res.status(204).json();
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Could not delete user" });
    }
  },

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId: number = parseInt(req.params.userId, 10);
      const userData: UserModel.User = req.body;
      const updatedUser = await UserModel.updateUser(userId, userData);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Could not update user" });
    }
  },

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserModel.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Could not fetch users" });
    }
  },

  async verifyUser(req: Request, res: Response): Promise<void> {
    try {
      const token: string = req.params.token;
      const user = await UserModel.verifyUser(token);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      res.status(500).json({ error: "Could not verify user" });
    }
  },
};
