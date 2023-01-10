import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodoController,
  updateTodoController,
} from "../controller/todo.controller.js";

const router = express.Router();

router.get("/get-todo", getTodoController);

router.post("/create-todo", createTodoController);

router.patch("/update-todo", updateTodoController);

router.delete("/delete-todo", deleteTodoController);

export default router;
