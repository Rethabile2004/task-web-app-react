//
// Rethabile Eric Siase
// github.com/rethabile2004
//

import { useState } from "react";
import TaskCard from "./TaskCard";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([
    {
      name: "Cover at least 2 lessons",
      id: 212,
      description:
        "Use the exercise chatgpt gives you as a foundation for your react knowledge.",
    },
    {
      name: "Do Python for 20 mins",
      id: 531,
      description:
        "Use ChatGPT to summarize info for effective studying.",
    },
    {
      name: "Relax for 20 mins",
      id: 562,
      description: "Enjoy your peace. ❤",
    },
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      setTasks([...tasks, { name, description, id: Date.now() }]);
      setName("");
      setDescription("");
    }
  };

  const handleOnRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>My Task Dashboard</h1>

      {/* Form */}
      <form
        onSubmit={handleAddTask}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>

      {/* Tasks */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            name={task.name}
            description={task.description}
            onRemove={() => handleOnRemove(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
