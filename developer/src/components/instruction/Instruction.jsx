import React, { useState } from "react";
import "./instruction.css";
import ListIcon from '@mui/icons-material/List';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function TodoInstruction({ task }) {
  return (
    <div
      className="todo-task"
      style={{ textDecoration: task.completed ? "line-through" : "" ,color: "rgb(255, 0, 0)"}}
    >
    
    <div className="ttexwrap">
    <div className="ticonwrap"> {task.completed ? <TaskAltIcon style={{color:"green"}}/>:<ListIcon style={{color:"rgb(255, 0, 0)"}}/>}</div>
   
      <h3 className="ttext">{task.title}</h3>
    </div>
    </div>
  );
}

const Instruction = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  const addInstruction = (title) => {
    const newTasks = [{ title, completed: false },...tasks ];
    setTasks(newTasks);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addInstruction(value);
    setValue("");
  };
  return (
    <div className="todo-container">
      <div className="todo-header">Instructions</div>
      <div className="create-todo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Add a new task"
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="todo-tasksholder">
        <div className="todo-tasks">
          {tasks.map((task, index) => (
            <TodoInstruction task={task} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruction;
