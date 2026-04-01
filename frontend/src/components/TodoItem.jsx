import { ListItem, Checkbox, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => deleteTodo(todo._id)}>
          <DeleteIcon color="error" />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id)}
      />
      <ListItemText
        primary={todo.text}
        sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
      />
    </ListItem>
  );
};

export default TodoItem;