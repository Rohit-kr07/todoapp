import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        fullWidth
        label="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add button
      </Button>
    </Box>
  );
};

export default TodoForm;
