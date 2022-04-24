import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./projectList.css";
import Progressbar from "../../components/circular-progressbar/Progressbar";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookIcon from "@mui/icons-material/Book";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProjectList = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Box className="box" sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <div className="projectShow">
                  <div className="projectShowTop">
                    <div className="projectShowTopTitle">
                      <span className="projectShowprojectname">
                        Project management system
                      </span>
                      <span className="projectShowprojectTitle">
                        ABC company
                      </span>
                    </div>
                  </div>
                  <div className="projectShowBottom">
                    <div className="projectShowdetail">
                      <span className="projectShowTitle">Project Detail</span>
                      <div className="projectShowInfo">
                        <Grid3x3Icon className="projectShowIcon" />
                        <span className="userShowInfoTitle">dfdgfdghfh</span>
                      </div>
                      <div className="projectShowInfo">
                        <BookIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">tast</span>
                      </div>
                      <div className="projectShowInfo">
                        <LocalPhoneIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                      </div>
                      <span className="projectShowTitle">Contributors</span>
                      <div className="userShowInfo">
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                      </div>
                    </div>
                    <div className="projectShowcontributors">
                      <span className="projectShowTitle">
                        Project Analytics
                      </span>
                      <div className="projectShowInfo">
                        <Progressbar />
                      </div>
                      <button className="viewbutton">
                        <h1 className="viewbuttontext">View</h1>
                        <FaceRoundedIcon className="viewbuttonicon" />
                      </button>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="projectShow">
                  <div className="projectShowTop">
                    <div className="projectShowTopTitle">
                      <span className="projectShowprojectname">
                        Project management system
                      </span>
                      <span className="projectShowprojectTitle">
                        ABC company
                      </span>
                    </div>
                  </div>
                  <div className="projectShowBottom">
                    <div className="projectShowdetail">
                      <span className="projectShowTitle">Project Detail</span>
                      <div className="projectShowInfo">
                        <Grid3x3Icon className="projectShowIcon" />
                        <span className="userShowInfoTitle">test</span>
                      </div>
                      <div className="projectShowInfo">
                        <BookIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">ewrewrtetr</span>
                      </div>
                      <div className="projectShowInfo">
                        <LocalPhoneIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                      </div>
                      <span className="projectShowTitle">Contributors</span>
                      <div className="userShowInfo">
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                      </div>
                    </div>
                    <div className="projectShowcontributors">
                      <span className="projectShowTitle">
                        Project Analytics
                      </span>
                      <div className="projectShowInfo">
                        <Progressbar />
                      </div>
                      <button className="viewbutton">
                        <h1 className="viewbuttontext">View</h1>
                        <FaceRoundedIcon className="viewbuttonicon" />
                      </button>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <div className="projectShow">
                  <div className="projectShowTop">
                    <div className="projectShowTopTitle">
                      <span className="projectShowprojectname">
                        Project management system
                      </span>
                      <span className="projectShowprojectTitle">
                        ABC company
                      </span>
                    </div>
                  </div>
                  <div className="projectShowBottom">
                    <div className="projectShowdetail">
                      <span className="projectShowTitle">Project Detail</span>
                      <div className="projectShowInfo">
                        <span className="userShowInfoTitle">test</span>
                      </div>
                      <div className="projectShowInfo">
                        <span className="userShowInfoTitle">ewrewrtetr</span>
                      </div>
                      <div className="projectShowInfo">
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                      </div>
                      <span className="projectShowTitle">Contributors</span>
                      <div className="userShowInfo">
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                      </div>
                    </div>
                    <div className="projectShowcontributors">
                      <span className="projectShowTitle">
                        Project Analytics
                      </span>
                      <div className="projectShowInfo">
                        <Progressbar />
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="projectShow">
                  <div className="projectShowTop">
                    <div className="projectShowTopTitle">
                      <span className="projectShowprojectname">
                        Project management system
                      </span>
                      <span className="projectShowprojectTitle">
                        ABC company
                      </span>
                    </div>
                  </div>
                  <div className="projectShowBottom">
                    <div className="projectShowdetail">
                      <span className="projectShowTitle">Project Detail</span>
                      <div className="projectShowInfo">
                        <Grid3x3Icon className="projectShowIcon" />
                        <span className="userShowInfoTitle">test</span>
                      </div>
                      <div className="projectShowInfo">
                        <BookIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">ewrewrtetr</span>
                      </div>
                      <div className="projectShowInfo">
                        <LocalPhoneIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                      </div>
                      <span className="projectShowTitle">Contributors</span>
                      <div className="userShowInfo">
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                      </div>
                    </div>
                    <div className="projectShowcontributors">
                      <span className="projectShowTitle">
                        Project Analytics
                      </span>
                      <div className="projectShowInfo">
                        <Progressbar />
                      </div>
                      <button className="viewbutton">
                        <h1 className="viewbuttontext">View</h1>
                        <FaceRoundedIcon className="viewbuttonicon" />
                      </button>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="projectShow">
                  <div className="projectShowTop">
                    <div className="projectShowTopTitle">
                      <span className="projectShowprojectname">
                        Project management system
                      </span>
                      <span className="projectShowprojectTitle">
                        ABC company
                      </span>
                    </div>
                  </div>
                  <div className="projectShowBottom">
                    <div className="projectShowdetail">
                      <span className="projectShowTitle">Project Detail</span>
                      <div className="projectShowInfo">
                        <Grid3x3Icon className="projectShowIcon" />
                        <span className="userShowInfoTitle">test</span>
                      </div>
                      <div className="projectShowInfo">
                        <BookIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">ewrewrtetr</span>
                      </div>
                      <div className="projectShowInfo">
                        <LocalPhoneIcon className="projectShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                      </div>
                      <span className="projectShowTitle">Contributors</span>
                      <div className="userShowInfo">
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                        <img
                          className="contributorImg"
                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />
                      </div>
                    </div>
                    <div className="projectShowcontributors">
                      <span className="projectShowTitle">
                        Project Analytics
                      </span>
                      <div className="projectShowInfo">
                        <Progressbar />
                      </div>
                      <button className="viewbutton">
                        <h1 className="viewbuttontext">View</h1>
                        <FaceRoundedIcon className="viewbuttonicon" />
                      </button>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ProjectList;
