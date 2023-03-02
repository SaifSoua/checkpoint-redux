import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../../redux/actions/taskActions";
const EditTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { current } = useSelector((state) => state.taskReducer);
  useEffect(() => {
    if (current !== null) {
      setText(current.description);
    }
  }, [current]);
  const onSave = () => {
    dispatch(updateTask({ id: current.id, description: text }));
  };
  return (
    <div>
      <div
        id="editTask"
        className="modal fade"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                id="save"
                type="button"
                className="btn btn-primary"
                onClick={onSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
