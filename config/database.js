import mysql from "mysql2";
import pass from "../pass.js";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass,
  database: "memberlist",
});

export default db;
