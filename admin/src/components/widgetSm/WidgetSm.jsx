import "./widgetSm.css";
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
console.log(users);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user) => (
        <li className="widgetSmListItem" key={user._id}>
          <img
            className="widgetSmuserImage"
            src={user.img ||
            "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            alt=""
          />
          <div className="widgetSmuser">
            <div className="widgetSmUserName">{user.username}</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmUserButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>

        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
