import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import UserRoutes from "./routes/UserRoutes";
import RentalsRoutes from "./routes/RentalsRoutes";
import BookingRoutes from "./routes/BookingRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes";
import ReviewRoutes from "./routes/ReviewRoutes";
import FileRoutes from "./routes/FileRoutes";
import PaymentRoutes from "./routes/PaymentRoutes";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use("/api", AuthenticationRoutes);
app.use("/api", RentalsRoutes);
app.use("/api", UserRoutes);
app.use("/api", BookingRoutes);
app.use("/api", ReviewRoutes);
app.use("/api", FileRoutes);
app.use("/api", PaymentRoutes);

app.listen(8080, () => console.log("Server running on port 3000!"));

module.exports = app;
