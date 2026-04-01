import { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import API from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    await API.post("/", { text });
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await API.put(`/${id}`);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await API.delete(`/${id}`);
    fetchTodos();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" align="center">
          Todo App
        </Typography>

        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </Paper>
    </Container>
  );
};

export default Home;
