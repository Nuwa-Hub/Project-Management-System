import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./task.css";
import Divider from "@mui/material/Divider";
import ChatInterface from "../../components/chatInterface/ChatInterface";

const Task = () => {
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
                    <span className="taskShowtaskname">Create Admin Page</span>
                    <span className="taskShowtaskTitle">
                      Project management system
                    </span>
                  </div>
                </div>
                <div className="taskShowBottom">
                  <span className="taskShowTitle">Task Details</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">Task ID : 1</span>
                  </div>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">description</span>
                  </div>
                  <span className="taskShowTitle">Given date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">2000/04/03</span>
                  </div>
                  <span className="taskShowTitle">Due date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">2000/04/06</span>
                  </div>
                </div>
              </div>
              <Divider variant="middle" className="taskdivider"/>
              <div className="taskShow">
                <div className="userShowTop">
                  <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Task Holder</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">annabeck99</span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">10.12.1999</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">+1 123 456 67</span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">
                      annabeck99@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="massages-container">
              <ChatInterface/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
