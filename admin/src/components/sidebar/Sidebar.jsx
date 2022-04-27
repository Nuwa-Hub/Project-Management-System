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
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TaskIcon from '@mui/icons-material/Task';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Sidebar() {
  const dispatch = useDispatch();

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Confirm to Logout?</h1>
            <p>Are you sure to do this.</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                logOut(dispatch);
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      }
    });
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to={"/"}>
              <li className="sidebarListItem">
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
              <li className="sidebarListItem ">
                <PersonOutlineIcon className="sidebarIcon" />
                Developers
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
            <li className="sidebarListItem">
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
     
      <div className="logoutdiv" onClick={submit}>
        <LogoutIcon className="logoutIcon"/>
        <span className="logouttext">logout</span>
      </div>
     
    </div>
  );
}
