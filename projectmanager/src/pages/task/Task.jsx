import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./task.css";
import Divider from "@mui/material/Divider";
import ChatInterface from "../../components/chatInterface/ChatInterface";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import userdp from "../../images/user.png";

const Task = () => {
  const location = useLocation();
  const taskId = location.pathname.split("/")[2];

  //get task relevent to tha specific taskid
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task._id === taskId)
  );
  //get project relevent to tha specific task.projectId
  const project = useSelector((state) =>
    state.project.projects.find((project) => project._id === task.projectId)
  );
  //get project relevent to tha specific task.projectId
  const taskHolder = useSelector((state) =>
    state.developer.developers.find(
      (developer) => developer._id === task.developerId
    )
  );
  console.log(taskHolder)
  //get task developer id
  const user2 = task.developerId;
  //get project manager id
  const user1 = useSelector((state) => state.user.currentUser._id);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="task">
          <div className="task-wapper">
            <div className="taskInfo">
              <div className="taskShow">
                <div className="taskShowTop">
                  <div className="taskShowTopTitle">
                    <span className="taskShowtaskname">{task.Taskname}</span>
                    <span className="taskShowtaskTitle">
                      {project.companyname}
                    </span>
                  </div>
                </div>
                <div className="taskShowBottom">
                  <span className="taskShowTitle">Task Details</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">{task.Taskname}</span>
                  </div>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">description</span>
                  </div>
                  <span className="taskShowTitle">Given date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">
                      {" "}
                      {task.duedate.slice(0, 10)}
                    </span>
                  </div>
                  <span className="taskShowTitle">Due date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">
                      {" "}
                      {task.duedate.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
              <Divider variant="middle" className="taskdivider" />
              <div className="taskShow">
                <div className="userShowTop">
                  <img
                    src={userdp || taskHolder.img} alt="user image"
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">
                      {taskHolder.username}
                    </span>
                    <span className="userShowUserTitle">Task Holder</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">{taskHolder.username}</span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">{taskHolder.email}</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">{taskHolder.telNo}</span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">
                    {taskHolder.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="massages-container">
              <ChatInterface taskId={taskId} user1={user1} user2={user2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
