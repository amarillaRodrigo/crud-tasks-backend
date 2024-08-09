import mysql2 from "mysql2/promise";

export const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tasks_db",
});

async function connectToDatabase() {
  try {
    const conn = await connection;
    console.log("Connected as id " + conn.threadId);
    return conn;
  } catch (err) {
    console.error("Error connecting: " + err.stack);
    throw err;
  }
}

connectToDatabase();
