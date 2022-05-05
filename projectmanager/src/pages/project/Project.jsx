import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./project.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GrantChartsm from "../../components/granttChartsm/GrantChartsm";
import Divider from "@mui/material/Divider";
import SearchBar from "material-ui-search-bar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import CreateTaskDialog from "../../components/createTaskDialog/CreateTaskDialog";
import WidgetTask from "../../components/widgetTask/WidgetTask";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/apiCalls";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  //get project by id
  const project = useSelector((state) =>
    state.project.projects.find((project) => project._id === projectId)
  );

  //get task by projectID
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    getTasks(dispatch, projectId);
  }, [dispatch, projectId, open]);

  const [searchItem, setSearchItem] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="uproject">
          <div className="uprojectwrapper">
            <div className="uprojecttop">
              <div className="uprojecttopleft">
                <h3 className="uprojecttoplefttitle">{project.projectname}</h3>
                <h3 className="uprojecttopleftcompany">
                  {project.companyname}
                </h3>
              </div>
              <div className="uprojecttopright">
                <button className="userAddButton">Create</button>
              </div>
            </div>
            <div className="uprojectmid">
              <div className="uprojectdetail">
                <h3 className="uprojectdetailtitle">Project Detail</h3>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <PermIdentityIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">annabeck99</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarTodayIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">10.12.1999</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <PhoneAndroidIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">+1 123 456 67</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutlineIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      annabeck99@gmail.com
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <LocationOnIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">New York | USA</span>
                  </div>
                  <span className="projectShowTitle">Contributors</span>
                  <div className="userShowInfo">
                    <img
                      className="contributorImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                  </div>
                </div>
              </div>
              <div className="uprojectanalys">
                <GrantChartsm tasks={tasks} />
              </div>
            </div>
            <Divider className="uprjectpagedevider" />
            <div className="uprojectbottom">
              <div className="uprojectbottomtop">
                <div className="uprojecttopleft">
                  <h3 className="uprojecttaskstitle">Project Tasks</h3>
                </div>
                <div className="uprojecttopright">
                  <SearchBar
                    value={searchItem}
                    onChange={(value) => {
                      setSearchItem(value);
                    }}
                    onRequestSearch={() => console.log("onRequestSearch")}
                    style={{
                      margin: "0 0px",
                      maxWidth: 800,
                    }}
                  />
                </div>

                <div className="uprojecttopright">
                  <button className="userAddButton" onClick={handleClickOpen}>
                    Create
                  </button>
                  <CreateTaskDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                    projectId={projectId}
                  />
                </div>
              </div>
              <div className="uprojectbottombody">
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Masonry
                    columns={4}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={4}
                    defaultSpacing={1}
                  >
                    {tasks.map((task) => (
                      <Item key={task._id} sx={{ height: "auto" }}>
                        <WidgetTask task={task} />
                      </Item>
                    ))}
                  </Masonry>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
