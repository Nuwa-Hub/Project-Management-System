import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./createproject.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../redux/apiCalls";

const CreateProject = () => {
  const [inputs, setInputs] = useState({});
  //due date picker
  const [date, setValue] = React.useState(new Date());

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const Changedate = (newValue) => {
    setValue(newValue);
  };

  //get task by projectID
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser._id);

  const handleClick = (e) => {
    e.preventDefault();
    const project = { ...inputs, duedate: date, managerId:userId };
          addProject(project, dispatch);
  };
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="createproject">
          <h1 className="newProjectTitle">New Project</h1>
          <form className="newProjectForm">
            <div className="newProjectItem">
              <label>Projet Name</label>
              <input
                name="projectname"
                type="text"
                placeholder="Software project"
                onChange={handleChange}
              />
            </div>
            <div className="newProjectItem">
              <label>Company Name</label>
              <input
                name="companyname"
                type="text"
                placeholder="ABC company"
                onChange={handleChange}
              />
            </div>
            <div className="newProjectItem">
              <label>Due Date</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} className="taskCreateInputdate">
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={Changedate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
          </form>
          <button className="newProjectButton" onClick={handleClick}>
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
