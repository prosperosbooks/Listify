import React, { useEffect } from "react";
import useTaskState from "./hooks/useTaskState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Tasks() {
  const initialTasks = JSON.parse(window.localStorage.getItem("tasks") || "[]");

  const { tasks, editTask, removeTask, addTask, toggleComplete } = useTaskState(
    initialTasks
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
