import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../repsitories/todo.repository.js";

const getTodoController = async (req, res, next) => {
  const todos = await getTodo({});
  res.json(todos);
};

const createTodoController = async (req, res, next) => {
  const todo = await createTodo(req.body);
  res.json(todo);
};
const updateTodoController = async (req, res, next) => {
  const todo = await updateTodo(req.query, req.body);
  res.json(todo);
};

const deleteTodoController = async (req, res, next) => {
  const todo = await deleteTodo(req.body);
  res.json(todo);
};

export {
  getTodoController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
};
