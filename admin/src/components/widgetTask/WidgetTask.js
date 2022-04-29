import React from "react";
import "./widgetTask.css";
import BookIcon from "@mui/icons-material/Book";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const WidgetTask = () => {
  return (
    <div className="widgetTask">
      <div className="widgetTaskwrapper">
        <div className="widgetTasktop">
          <h3 className="widgetTasktitle">Create Header</h3>
          <Link className="link" to={"/task"}>
            <Button className="taskviewbutton" variant="outlined">
              <RemoveRedEyeIcon className="taskviewbuttonicon" />
              <h1 className="taskviewbuttontext">display</h1>
            </Button>
          </Link>
        </div>
        <div className="widgetTaskbottom">
          <div className="widgetTaskleft">
            <span className="projectShowTitle">Project Detail</span>
            <div className="projectShowInfo">
              <BookIcon className="projectShowIcon" />
              <span className="userShowInfoTitle">test</span>
            </div>
            <div className="projectShowInfo">
              <BookIcon className="projectShowIcon" />
              <span className="userShowInfoTitle">test</span>
            </div>
            <div className="projectShowInfo">
              <BookIcon className="projectShowIcon" />
              <span className="userShowInfoTitle">test</span>
            </div>
          </div>
          <div className="widgetTaskright">
            <span className="projectShowTitle">Contributor</span>
            <div className="userShowInfo">
              <img
                className="taskcontributorImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetTask;
