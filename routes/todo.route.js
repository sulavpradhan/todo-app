import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getDoneTodoController,
  getTodoController,
  getUpcommingTodoController,
  updateTodoController,
} from "../controller/todo.controller.js";
import { createTodoValidator } from "../validators/create.validator.js";
import { updateTodoValidator } from "../validators/update.validator.js";

const router = express.Router();

router.get("/get-todo", getTodoController);

router.get("/get-upcomming-todo", getUpcommingTodoController);

router.get("/get-done-todo", getDoneTodoController);

router.post("/create-todo", createTodoValidator, createTodoController);

router.post("/update-todo", updateTodoValidator, updateTodoController);

router.post("/delete/:id", deleteTodoController);

export default router;
