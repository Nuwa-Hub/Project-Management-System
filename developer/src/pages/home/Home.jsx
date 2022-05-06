import React from "react";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <Chart />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
