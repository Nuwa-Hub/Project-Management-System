import React, { useEffect, useState } from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../redux/apiCalls";

export default function Topbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  //get notifivcaions
  useEffect(() => {
    getNotifications(dispatch,user._id);
  }, [dispatch]);

  let notificationset = useSelector((state) => state.notification.notifications);
  console.log(notificationset.legnth)

  const displayNotification = ({ title }) => {
    return (
      <div className="notifywrap">
        <NotificationsActiveIcon className="notifyicon" />
        <span className="notifySpan">
          {title}
        </span>
      </div>
    );
  };

  function toggleMenu() {
    const notifymenu = document.getElementById("notifications");
    notifymenu.classList.toggle("isOpen");
   
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Project Manager</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer" onClick={() => toggleMenu()}>
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />

          <div id="notifications" className="notifications">
            <div className="notificationswrapper">
              {notificationset.map((n) => displayNotification(n))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
