import express, { Express, Request, Response } from "express";
import router from "./routes/api";
import cors from "cors";
const app: Express = express();

app.use(cors());
app.use("/api", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
