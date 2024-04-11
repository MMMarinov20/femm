import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import UserRoutes from "./routes/UserRoutes";
import RentalsRoutes from "./routes/RentalsRoutes";
const app: Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use("/api", RentalsRoutes);
app.use("/api", UserRoutes);

app.listen(3000, () => console.log("Server running on port 3000!"));
