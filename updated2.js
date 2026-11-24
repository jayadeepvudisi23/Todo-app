import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();

    if (task !== "") {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>

      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={styles.input}
        />
        <button type="submit" style={styles.addBtn}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.listItem}>
            <span>{t}</span>
            <div>
              <button
                onClick={() => editTask(index)}
                style={styles.editBtn}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
    backgroundColor: "#2f5ea8",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    color: "white",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    marginRight: "10px",
  },
  addBtn: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0f9d8a",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "400px",
    margin: "0 auto",
  },
  listItem: {
    backgroundColor: "#f5f5f5",
    margin: "10px 0",
    padding: "15px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editBtn: {
    marginRight: "10px",
    padding: "5px 10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f4b400",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#db4437",
    color: "white",
    cursor: "pointer",
  },
};

export default TodoApp; 