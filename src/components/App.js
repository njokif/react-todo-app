import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: newTask, completed: false }]);
  }

  function toggleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Input onAdd={addTask} />
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.name}
          <button onClick={() => toggleComplete(task.id)}></button>
        </div>
      ))}
    </div>
  );
}

export default App;
