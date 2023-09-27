import express from "express";
import { getData, insertData, updateData, deleteData } from "../controllers/listControllers.js";

const router = express.Router();

router.get("/get", getData);
router.post("/insert", insertData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

export default router;
