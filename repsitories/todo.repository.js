import Todo from "../models/todo.model.js";

const createTodo = async (newTodo) => {
  const todo = Todo(newTodo);
  return await todo.save();
};

const getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const updateTodo = async (filter, update) => {
  const todo = await Todo.updateOne(filter, update);
  return todo;
};

const deleteTodo = async (filter) => {
  const todo = await Todo.deleteOne(filter);
};

export default { createTodo, getTodoById, updateTodo, deleteTodo };
