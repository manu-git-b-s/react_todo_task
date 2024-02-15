import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditForm from "./EditForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // const [view, setView] = useState("all");
  const [selects, setSelects] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const handleSelect = (e) => {
    setSelects(e.target.value);
  };

  useEffect(() => {
    if (selects === "pending") {
      setfilteredTodos(todos.filter((todo) => todo.completed === false));
    }
    if (selects === "completed") {
      setfilteredTodos(todos.filter((todo) => todo.completed === true));
    }
    if (selects === "all") {
      setfilteredTodos(todos.map((todo) => todo));
    }
  }, [selects, todos]);

  const addTodo = (title, description) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title,
        description,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (title, description, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title, description, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const handleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container py-5">
      <h3 className="text-white text-center mb-5">My Todo</h3>
      <TodoForm addTodo={addTodo} />
      <div className="d-flex mt-5 justify-content-between">
        <h3 className="text-white">My Todos</h3>
        <div>
          <span className="text-white me-3">Status Filter:</span>
          <select
            value={selects}
            onChange={handleSelect}
            style={{ backgroundColor: "#fe8180" }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-4">
        {filteredTodos.map((todo, index) =>
          todo.isEditing ? (
            <EditForm task={todo} key={index} editTodo={editTask} />
          ) : (
            <Todo
              task={todo}
              key={index}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              handleStatus={handleStatus}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
