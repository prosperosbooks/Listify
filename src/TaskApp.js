import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import uuid from "uuid/v4";

function Tasks() {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks") || "[]");

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = newTaskText => {
    if (newTaskText.length)
      setTasks([...tasks, { id: uuid(), task: newTaskText, completed: false }]);
  };

  const removeTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, task: newTask } : task
    );
    setTasks(updatedTasks);
  };

  const toggleComplete = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Paper
      style={{
        background: "#ffefd4",
        height: "100vh",
        padding: 0,
        margin: 0
      }}
      elevation={0}
    >
      <AppBar
        position="static"
        style={{ background: "#ff805c", height: "64px" }}
      >
        <Toolbar>
          <Typography color="inherit">LISTIFY WITH REACT HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TaskForm addTask={addTask} />
          <TaskList
            toggleComplete={toggleComplete}
            editTask={editTask}
            removeTask={removeTask}
            tasks={tasks}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Tasks;
