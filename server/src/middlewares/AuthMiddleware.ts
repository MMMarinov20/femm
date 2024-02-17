import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as UserModel from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const AuthMiddleware = {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await UserModel.login(email, password);
      if (user) {
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token });
      } else res.status(401).json({ error: "Invalid email or password" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Could not log in" });
    }
  },
};
