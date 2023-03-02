import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTask } from "../../redux/actions/taskActions";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onClickADD = () => {
    if (text) {
      const newTask = { id: Date.now(), description: text, isDone: false };
      dispatch(addTask(newTask));
      setText("");
    }
  };
  const onFiltre = (e) => {
    dispatch(filterTask(e.target.id));
  };
  return (
    <div className="card">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="add your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon1"
          onClick={onClickADD}
        >
          Add
        </button>
      </div>
      <div className="d-flex justify-content-arround">
        <div>
          <input
            type="radio"
            id="completed"
            value="completed"
            onClick={onFiltre}
            name="task"
          />
          <label htmlFor="completed" className="form-lable">
            completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="uncompleted"
            value="uncompleted"
            onClick={onFiltre}
            name="task"
          />
          <label htmlFor="uncompleted" className="form-lable">
            uncompleted
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="all"
            value="all"
            onClick={onFiltre}
            name="task"
          />
          <label htmlFor="all" className="form-lable">
            All
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
