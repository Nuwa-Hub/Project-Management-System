import "./newUser.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import userdp from "../../images/user.png";
import PublishIcon from "@mui/icons-material/Publish";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, auth, storage } from "../../firebase";
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (file) {
      const fileName = `dp/${new Date().getTime()} - ${file.name}`;
      //const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const user = { ...inputs, img: downloadURL };
            //console.log(user)
            addUser(dispatch, user);
            setInputs(null);
          });
        }
      );
    } else {
      console.log(inputs)
      addUser(dispatch, inputs);
      setInputs(null);
    }
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="userforminput">
              <div className="userformleft">
                <div className="newUserItem">
                  <label>Username</label>
                  <input
                    
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="john"
                  />
                </div>
                <div className="newUserItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                  <label>Email</label>
                  <input
                    
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                  />
                </div>
                <div className="newUserItem">
                  <label>Password</label>
                  <input
                    
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
                <div className="newUserItem">
                  <label>Phone</label>
                  <input
                   
                    type="text"
                    name="telNo"
                    onChange={handleChange}
                    placeholder="+1 123 456 78"
                  />
                </div>
                <div className="newUserItem">
                  <label>Address</label>
                  <input
                   
                    type="text"
                    name="address"
                    onChange={handleChange}
                    placeholder="New York | USA"
                  />
                </div>
                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="newUserItem">
                  <label>Is Admin</label>
                  <select
                    className="newUserSelect"
                    onChange={handleChange}
                    name="isAdmin"
                    id="active"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div className="userformRight">
                <div className="productUpload">
                  <img src={userdp} alt="" className="productUploadImg" />
                  <label htmlFor="file">
                    <PublishIcon />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="newUserButton">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
