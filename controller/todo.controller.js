import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../repsitories/todo.repository.js";

const getTodoController = async (req, res, next) => {
  const todos = await getTodo(req.query);
  if (req.query._id) {
    res.render("editTodo");
  } else {
    res.render("index", { todosData: todos });
  }
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
  const id = req.params.id;
  const todo = await deleteTodo({ _id: id });
  res.redirect("/api/v1/todo/get-todo");
};

export {
  getTodoController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
};
