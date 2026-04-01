import Todo from "../models/Todo.js";

// Get all todos
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Add todo
export const createTodo = async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
};

// Update todo
export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
};

// Delete todo
export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};