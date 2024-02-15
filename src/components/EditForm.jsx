import { useState } from "react";

const EditForm = ({ editTodo, task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [stylesRemove, setStylesRemove] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    editTodo(title, description, task.id);
    setStylesRemove(false);
  };

  return (
    <div className="col col-4 mt-4">
      <div className="card p-3" style={{ backgroundColor: "#ccf5d3" }}>
        <div className="card-body">
          <div>
            Title :
            <input
              className=" d-inline bg-transparent mb-2"
              value={title}
              style={stylesRemove ? {} : { outline: 0, border: 0 }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            Description:
            <input
              className="d-inline bg-transparent mb-3"
              value={description}
              style={stylesRemove ? {} : { outline: 0, border: 0 }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <p className="card-subtitle">
            Status : {task.completed ? "Completed" : "Not completed"}
            {/* <select name="" id="">
          <option value="completed">Completed</option>
          <option value="completed">Not completed</option>
        </select> */}
          </p>
          <div className="text-end mt-3">
            <button
              className="btn text-white me-3"
              style={{ backgroundColor: "#13ad89" }}
              //   onClick={() => editTodo(task.id)}
              onClick={handleClick}
            >
              Update
            </button>
            <button
              className="btn text-white"
              style={{ backgroundColor: "#d15c20" }}
              //   onClick={() => deleteTodo(task.id)}
              disabled
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
