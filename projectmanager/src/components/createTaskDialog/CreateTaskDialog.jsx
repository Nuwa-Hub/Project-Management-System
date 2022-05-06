import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import "./createTaskDialog.css";
import Select from "react-select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/apiCalls";



const CreateTaskDialog = (props) => {
  const { onClose, selectedValue, open, projectId } = props;

  //get all users
  const developers = useSelector((state) => state.developer.developers);
  //due date picker
  const [date, setValue] = React.useState(new Date());
  const [developerId, setdeveloperId] = React.useState(null);
  const [inputs, setInputs] = useState({});
  console.log(developers)
  //set input values
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //set duedate
  const Changedate = (newValue) => {
    setValue(newValue);
  };
  //select options
  const options = developers.map((developer) => ({
    value: developer._id,
    label: developer.username,
  }));

  //close dialog
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  //get current user id
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser._id);

  //create task and add to database
  const handleClick = (e) => {
    e.preventDefault();
    const task = {
      ...inputs,
      duedate: date,
      managerId: userId,
      developerId: developerId.value,
      projectId: projectId,
    };
    addTask(task, dispatch);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className="taskcreateDialog">
      <div className="taskCreatewrapper">
        <div className="taskCreate">
          <span className="taskCreateTitle">Create Task</span>
          <form className="taskCreateForm">
            <div className="taskCreateLeft">
              <div className="taskCreateItem">
                <label>Task Name</label>
                <input
                  name="Taskname"
                  type="text"
                  placeholder="annabeck99"
                  className="taskCreateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="taskCreateItem">
                <label>Task Description</label>
                <input
                  name=""
                  type="text"
                  placeholder="Anna Becker"
                  className="taskCreateInput"
                />
              </div>
              <div className="taskCreateItem">
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
              <button className="taskCreateButton" onClick={handleClick}>
                Create
              </button>
            </div>
            <div className="taskCreateRight">
              <Select
                options={options}
                placeholder="Select Collaborator..."
                className="createtaskuserselector"
                onChange={setdeveloperId}
              />
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateTaskDialog;
