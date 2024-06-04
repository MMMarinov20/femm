import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as UserModel from "../models/User";
import { User } from "../models/User";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const parseCookies = (cookieString: string): Record<string, string> => {
  return cookieString
    .split(";")
    .map((cookie) => cookie.trim().split("="))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
};

export const AuthMiddleware = {
  authenticate: (req: Request, res: Response, next: Function) => {
    //const token = req.headers.authorization?.split(" ")[1];
    // const token = req.headers.cookie?.split("token=")[1];

    const cookies = parseCookies(req.headers.cookie || "");
    const token = cookies.token;

    console.log("Token:", token);

    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
      if (err) return res.status(401).json({ error: "Unauthorized" });

      req.body.userId = decoded.id;
      next();
    });
  },

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await UserModel.login(email, password);
      if (user) {
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: "30m",
        });

        res.cookie("token", token, { httpOnly: true, secure: true });

        res.status(200).json({ token });
      } else res.status(401).json({ error: "Invalid email or password" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Could not log in" });
    }
  },

  async logout(req: Request, res: Response): Promise<void> {
    try {
      res.clearCookie("token");
      res.status(200).json({ message: "Logged out" });
    } catch (error) {
      console.error("Error logging out:", error);
      res.status(500).json({ error: "Could not log out" });
    }
  },

  async register(req: Request, res: Response): Promise<void> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    try {
      if (!emailRegex.test(req.body.email)) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }
      if (!passwordRegex.test(req.body.password)) {
        res.status(400).json({
          error:
            "Password must be at least 8 characters long and contain at least one letter and one number",
        });
        return;
      }
      const { email, name, password, nationality } = req.body;
      const userObj: User = {
        email,
        name,
        password,
        nationality,
      };

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(userObj.password, saltRounds);
      userObj.password = hashedPassword;
      const user = await UserModel.createUser(userObj);
      if (user) {
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: "30m",
        });

        //Cookies.set("token", token, { expires: 30 });
        res.cookie("token", token, { httpOnly: true, secure: true });

        res.status(201).json({ token });
      } else res.status(400).json({ error: "Could not create user" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Could not register user" });
    }
  },
};
