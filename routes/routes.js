import express from "express";
import {
  getID,
  getData,
  insertData,
  updateData,
  deleteData,
} from "../controllers/listControllers.js";

const router = express.Router();

router.post("/login", getID);
router.get("/get/:id", getData);
router.post("/insert", insertData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

export default router;
