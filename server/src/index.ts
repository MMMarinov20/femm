import app from "./app";
import { createConnection, ConnectionOptions } from "typeorm";
import ormconfig from "./config/ormconfig";

const port = process.env.PORT || 3000;

const connectToDatabase = async () => {
  try {
    const connectionOptions: ConnectionOptions = {
      ...ormconfig,
    };

    await createConnection(connectionOptions);
    console.log("Connected to database");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

connectToDatabase();
