import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodoController,
  updateTodoController,
} from "../controller/todo.controller.js";
import { createTodoValidator } from "../validators/create.validator.js";
import { updateTodoValidator } from "../validators/update.validator.js";

const router = express.Router();

router.get("/get-todo", getTodoController);

router.post("/create-todo", createTodoValidator, createTodoController);

router.patch("/update-todo", updateTodoValidator, updateTodoController);

router.post("/delete/:id", deleteTodoController);

export default router;
