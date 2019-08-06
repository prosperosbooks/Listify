import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, removeTask, editTask, toggleComplete }) => {
  return tasks.length ? (
    <Paper>
      <List>
        {tasks.map((task, i) => (
          <React.Fragment key={task.id}>
            <TaskItem
              id={task.id}
              completed={task.completed}
              removeTask={removeTask}
              editTask={editTask}
              task={task.task}
              toggleComplete={toggleComplete}
            />
            {i < tasks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  ) : (
    ""
  );
};

export default TaskList;
