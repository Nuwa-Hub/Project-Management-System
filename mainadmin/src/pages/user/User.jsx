import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./user.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import userdp from "../../images/user.png";

export default function User() {
  
  const location=useLocation();
  const developerId=location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const developer=useSelector((state)=>
    state.developer.developers.find((developer)=>developer._id==developerId)
  )
//console.log(developer)
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
              <button className="userAddButton">Create</button>
            </Link>
          </div>

          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
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
                  <span className="userShowInfoTitle">{developer.username}</span>
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
                  <span className="userShowInfoTitle">
                  {developer.email}
                  </span>
                </div>
                <div className="userShowInfo">
                  <LocationOnIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{developer.address}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder={developer.username}
                      className="userUpdateInput"
                    />
                  </div>
          
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder={developer.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder={developer.telNo}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder={developer.address}
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                    />
                    <label htmlFor="file">
                      <PublishIcon className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
