import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./createproject.css";
import Button from '@mui/material/Button';
import TextField from "../../components/textField/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../redux/apiCalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

  const handleClick = (e,{resetForm}) => {
    
    const project = { ...e,  managerId: userId };
    console.log(project)
    addProject(project, dispatch);
    resetForm();
  };

  //validate
  const validate = Yup.object({
    projectname: Yup.string()
      .max(25, "Must be 25 characters or less!")
      .required("Requered!"),
    companyname: Yup.string()
      .max(25, "Must be 25 characters or less!")
      .required("Requered!"),
      duedate: Yup.string()
      .required("Requered!"),
  });

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="createproject">
        <div className="createprojectwrapper">
          <Formik
            initialValues={{
              projectname: "",
              companyname: "",
              duedate: "",
            }}
            validationSchema={validate}
            onSubmit={handleClick}
          >
            {({values,isValid,dirty}) => (
              <>
                
                <h1 className="newProjectTitle">New Project</h1>
                <Form className="newProjectForm">
                  <TextField
                    label="Project Name"
                    name="projectname"
                    type="text"
                  />
                  <TextField
                    label="Company Name"
                    name="companyname"
                    type="text"
                  />
                  <TextField label="Due Date" name="duedate" type="date" />
                  <TextField
                    label="Company Nam"
                    name="companynam"
                    type="text"
                  />
                  <button variant="contained"  type="submit" className="newProjectButton">Create</button>
                </Form>
              
              </>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
