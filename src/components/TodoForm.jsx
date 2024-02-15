import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    clearInputs();
  };

  return (
    <form className="d-flex justify-content-evenly" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Title"
        className="form-control w-50 me-3 border-success"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Description"
        className="form-control w-50 me-3 border-success"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-success w-25"
        style={{ backgroundColor: "#96E9C6", color: "#000" }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
