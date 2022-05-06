import React, { useEffect, useState } from "react";
import "./instruction.css";
import ListIcon from "@mui/icons-material/List";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch, useSelector } from "react-redux";
import { addChore, deleteChore, getChores } from "../../redux/apiCalls";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoInstruction({ chore,dispatch }) {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteChore(chore._id, dispatch);
  };

  return (
    <div
      className="todo-task"
      style={{
        textDecoration: chore.completed ? "line-through" : "",
        color: "rgb(255, 0, 0)",
      }}
    >
      <div className="ttexwrap">
        <div className="ticonwrap">
          <div className="todo-deleteiconwrap" onClick={handleDelete}>
            <DeleteIcon className="todo-deleteicon" />
          </div>
          {chore.completed ? (
            <TaskAltIcon style={{ color: "green" }} />
          ) : (
            <ListIcon style={{ color: "rgb(255, 0, 0)" }} />
          )}
        </div>

        <h3 className="ttext">{chore.title}</h3>
      </div>
    </div>
  );
}

const Instruction = ({ taskId }) => {
  const [title, setTitle] = useState("");

  //set input values
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //get chore by taskID
  const dispatch = useDispatch();
  const chores = useSelector((state) => state.chore.chores);

  //get chores theat relevent to task
  useEffect(() => {
    getChores(dispatch, taskId);
  }, [dispatch, taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const chore = {
      title: title,
      taskId: taskId,
    };
    addChore(chore, dispatch);
    setTitle("");
  };

  return (
    <div className="todo-container">
      <div className="todo-header">Instructions</div>
      <div className="create-todo">
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            className="input"
            value={title}
            placeholder="Add a new task"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="todo-tasksholder">
        <div className="todo-tasks">
          {chores.map((chore, index) => (
            <TodoInstruction chore={chore} dispatch={dispatch} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruction;