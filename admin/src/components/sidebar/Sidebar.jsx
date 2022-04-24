import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/apiCalls";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
//import { Link } from "react-router-dom";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TaskIcon from '@mui/icons-material/Task';

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/"}>
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/users"}>
              <li className="sidebarListItem active">
                <PersonOutlineIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link className="link" to={"/projects"}>
              <li className="sidebarListItem">
                <LaptopChromebookIcon className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <li className="sidebarListItem">
              <TaskIcon className="sidebarIcon" />
              Task
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <AccessAlarmIcon className="sidebarIcon" />
              Time handle
            </li>
            <li className="sidebarListItem">
              <PeopleOutlineIcon className="sidebarIcon" />
              User Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
      <Link className="link" to={"/login"}>
      <div className="logoutdiv" onClick={()=>{
        logOut(dispatch);
      }}>
        <LogoutIcon className="logoutIcon"/>
        <span className="logouttext">logout</span>
      </div>
      </Link>
    </div>
  );
}
