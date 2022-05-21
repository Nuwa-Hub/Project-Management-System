import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { getdevelopers } from "../../redux/apiCalls";
import "./home.css";

const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    getdevelopers(dispatch);
  }, []);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <div className="homewrapper">
            <Chart />
            <div className="homeWidgets">
              <WidgetSm />
              <WidgetLg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
