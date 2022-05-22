import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./editProfile.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import userdp from "../../images/user.png";
import { updateCurrentUser, updateUser } from "../../redux/apiCalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/textField/TextField";

export default function EditProfile() {
 


  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  //get current user
  const developer = useSelector((state) => state?.user?.currentUser);

  const handleClick = (e, { resetForm }) => {
    const updatedeveloper = { ...e };
    Object.keys(updatedeveloper).forEach(key => {
      if (updatedeveloper[key] === '') {
        delete updatedeveloper[key];
      }
    });
    updateCurrentUser(dispatch,updatedeveloper,developer._id);
    resetForm();
  };

  //validate
  const validate = Yup.object({
    username: Yup.string().max(12, "Must be 12 characters or less!"),
    email: Yup.string().max(15, "Must be 25 characters or less!"),
    telNo: Yup.string(),
    address: Yup.string().max(15, "Must be 25 characters or less!"),
  });
  //console.log(developer)
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit Profile</h1>
            
          </div>

          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={userdp || developer.img}
                  alt="user img"
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{developer.username}</span>
                  <span className="userShowUserTitle">Software Engineer</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {developer.username}
                  </span>
                </div>
                <div className="userShowInfo">
                  <CalendarTodayIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroidIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{developer.telNo}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutlineIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{developer.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationOnIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{developer.address}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  telNo: "",
                  address: "",
                }}
                validationSchema={validate}
                onSubmit={handleClick}
              >
                {({ values, isValid, dirty }) => (
                  <>
                    <span className="userUpdateTitle">Edit</span>
                    <Form className="userUpdateForm">
                      <div className="userUpdateLeft">
                        <TextField
                          label="Username"
                          name="username"
                          type="text"
                          className1="userUpdateItem"
                          className2="userUpdateInput"
                        />
                        <TextField
                          label="Email"
                          name="email"
                          type="text"
                          className1="userUpdateItem"
                          className2="userUpdateInput"
                        />
                        <TextField
                          label="Phone"
                          name="telNo"
                          type="text"
                          className1="userUpdateItem"
                          className2="userUpdateInput"
                        />
                        <TextField
                          label="Address"
                          name="address"
                          type="text"
                          className1="userUpdateItem"
                          className2="userUpdateInput"
                        />
                      </div>
                      <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                          <img
                            className="userUpdateImg"
                            src={userdp || developer.img}
                            alt="user img"
                          />
                          <label htmlFor="file">
                            <PublishIcon className="userUpdateIcon" />
                          </label>
                          <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                          />
                        </div>
                        <button className="userUpdateButton" type="submit">
                          Update
                        </button>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
