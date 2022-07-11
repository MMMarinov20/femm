import mysql2 from "mysql2";

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Maks123maks",
  database: "studio",
});

db.connect((err: any) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

export default db;
