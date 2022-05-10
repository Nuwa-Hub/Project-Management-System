import React from "react";
import "./sendemail.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const SendEmail = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="sendemailpage">
            <div className="sendemailWrapper">
                <div className="emailpageleft">left</div>
                <div className="emailpageright">right</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SendEmail;
