import express from "express";
import { createTask, deleteTask, getAllTask, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/getAllTask", getAllTask)
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);


export default router;
