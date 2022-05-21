
import { useDispatch } from "react-redux";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { getdevelopers, getmanagers, getProjects } from "../../redux/apiCalls";
import "./home.css";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

const Home = () => {
  const dispatch = useDispatch();
  const [projectStats, setProjectStats] = useState([]);

  useEffect(() => {
    getdevelopers(dispatch);
    getmanagers(dispatch);
    getProjects(dispatch);
  }, [dispatch]);
  
 

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/projects/stats");

        res.data.map((item) => {
          setProjectStats((prev) => [
            ...prev,
            { name: MONTHS[item._id], "Active Projects": item.total },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <Chart
            data={projectStats}
            title="Project Analytics"
            grid
            dataKey="Active Projects" />
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
