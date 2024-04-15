import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import UserRoutes from "./routes/UserRoutes";
import RentalsRoutes from "./routes/RentalsRoutes";
import BookingRoutes from "./routes/BookingRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes";

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use("/api", AuthenticationRoutes);
app.use("/api", RentalsRoutes);
app.use("/api", UserRoutes);
app.use("/api", BookingRoutes);

app.listen(3000, () => console.log("Server running on port 3000!"));
