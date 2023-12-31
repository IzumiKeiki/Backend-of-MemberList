import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5001, () => {
  console.log("Server running successfully on port 5001");
});
