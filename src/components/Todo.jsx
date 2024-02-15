// import { useState } from "react";

function Todo({ task, deleteTodo, editTodo, handleStatus }) {
  // const [status, setStatus] = useState("not completed");
  return (
    <div className="col col-4 mt-4">
      <div className="card p-1" style={{ backgroundColor: "#ccf5d3" }}>
        <div className="card-body">
          <div>
            Title :
            <input
              className="d-inline bg-transparent mb-2"
              value={task.title}
              style={{ outline: 0, border: 0 }}
            />
          </div>
          <div>
            Description:
            <input
              className="d-inline bg-transparent mb-3 "
              value={task.description}
              style={{ outline: 0, border: 0 }}
            />
          </div>
          <p className="card-subtitle">
            <span className="me-2">Status :</span>
            <select
              style={{ backgroundColor: "#9AD0C2" }}
              value={task.completed ? "completed" : "not completed"}
              onChange={() => {
                handleStatus(task.id);
                // setStatus(e.target.value);
              }}
            >
              <option value="completed" className="btn btn-success">
                Completed
              </option>
              <option selected value="not completed">
                Not completed
              </option>
            </select>
          </p>
          <div className="text-end mt-3">
            <button
              style={{ backgroundColor: "#14ad89" }}
              className="btn text-white me-3"
              onClick={() => editTodo(task.id)}
            >
              Edit
            </button>
            <button
              className="btn text-white"
              style={{ backgroundColor: "#d15c20" }}
              onClick={() => deleteTodo(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
