import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./project.css";

const Project = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="project">Project</div>
      </div>
    </>
  );
};

export default Project;