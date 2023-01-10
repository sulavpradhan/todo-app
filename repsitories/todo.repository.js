import Todo from "../models/todo.model.js";

const createTodo = async (newTodo) => {
  const todo = Todo(newTodo);
  return await todo.save();
};

const getTodo = async (filter) => {
  const todos = await Todo.find(filter);
  return todos;
};

const updateTodo = async (filter, update) => {
  const todo = await Todo.updateOne(filter, update);
  return todo;
};

const deleteTodo = async (filter) => {
  const todo = await Todo.deleteOne(filter);
  return todo;
};

export { createTodo, getTodo, updateTodo, deleteTodo };
