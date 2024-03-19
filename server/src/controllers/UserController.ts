// File: src/controllers/userController.ts

import { Request, Response } from "express";
import * as UserModel from "../models/User";

export const UserController = {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: UserModel.User = req.body;
      const newUser = await UserModel.createUser(userData);
      res.status(201).json(newUser);

      console.log("User created:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Could not create user" });
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId: number = parseInt(req.params.userId, 10);
      const user = await UserModel.findUserById(userId);
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
};
