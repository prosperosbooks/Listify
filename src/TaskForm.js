import React from "react";
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";

const TodoForm = ({ addTask }) => {
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTask(value);
    reset();
  };

  const handleClick = () => {
    addTask(value);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Task"
          fullWidth
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
          style={{ margin: "1rem 0" }}
        >
          Add Task
        </Button>
      </form>
    </Paper>
  );
};

export default TodoForm;
