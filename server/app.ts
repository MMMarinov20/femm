import express, { Express, Request, Response } from "express";

const app: Express = express();
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
