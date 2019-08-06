import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

const TaskItem = ({
  task,
  id,
  completed,
  removeTask,
  editTask,
  toggleComplete
}) => {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm task={task} toggle={toggle} id={id} editTask={editTask} />
      ) : (
        <>
          <ListItemText
            onClick={() => toggleComplete(id)}
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <Checkbox
              onChange={() => toggleComplete(id)}
              tabIndex={-1}
              checked={completed}
            />
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" color="primary" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Edit"
              color="secondary"
              onClick={() => removeTask(id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;
