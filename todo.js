import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default TodoApp;
