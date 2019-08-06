import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function EditTodoForm({ task, editTask, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const editHandler = e => {
    e.preventDefault();
    editTask(id, value);
    reset();
    toggle();
  };
  return (
    <>
      <form
        style={{ marginLeft: "1rem", width: "100%" }}
        onSubmit={editHandler}
      >
        <TextField
          fullWidth
          margin="normal"
          value={value}
          onChange={handleChange}
          autoFocus
        />
      </form>

      <Button
        style={{ margin: "0 1rem" }}
        color="primary"
        variant="contained"
        onClick={editHandler}
      >
        Submit
      </Button>
    </>
  );
}

export default EditTodoForm;
