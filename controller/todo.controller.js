import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../repsitories/todo.repository.js";

const getTodoController = async (req, res, next) => {
  const todos = await getTodo(req.query);
  const returnArray = []
  for(const todo of todos){
    returnArray.push({
      _id:todo._id,
      name:todo.name,
      description:todo.description,
      date:new Date(todo.date).toLocaleDateString(),
      time:new Date(todo.date).toLocaleTimeString()
    })
  }

  if (req.query._id) {
    res.render("editTodo", { data: returnArray });
  } else {
    res.render("index", { todosData: returnArray, pageName: "all" });
  }
};

const getUpcommingTodoController = async (req, res, next) => {
  const todos = await getTodo({ date: { $gt: new Date() }, done: false});
  const returnArray = []
  for(const todo of todos){
    returnArray.push({
      _id:todo._id,
      name:todo.name,
      description:todo.description,
      date:new Date(todo.date).toLocaleDateString(),
      time:new Date(todo.date).toLocaleTimeString()
    })
  }
  res.render("index", { todosData: returnArray, pageName: "upcomming" });
 
};

const getDoneTodoController = async (req, res, next) => {
  const todos = await getTodo({ done: true });
  const returnArray = []
  for(const todo of todos){
    returnArray.push({
      _id:todo._id,
      name:todo.name,
      description:todo.description,
      date:new Date(todo.date).toLocaleDateString(),
      time:new Date(todo.date).toLocaleTimeString()
    })
  }
  res.render("index", { todosData: returnArray, pageName: "done" });

};

const createTodoController = async (req, res, next) => {
  const todo = await createTodo(req.body);
  res.redirect("/api/v1/todo/get-todo");
};
const updateTodoController = async (req, res, next) => {
  const todo = await updateTodo(req.query, req.body);
  res.redirect("/api/v1/todo/get-todo");
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
  getUpcommingTodoController,
  getDoneTodoController,
};