import "./widgetLg.css";
import Piechart from "../pieChart/Piechart";
import React from "react";
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Projects Analytics</span>
      <div className="widgetLgchart">
        <Piechart className="widgetLgchart" />
        <div className="chartItems">
          <div className="chartItem">
          <FiberManualRecordOutlinedIcon className="dotIndicator"/>
            <h3 className="chartItemText">completed projects</h3>
          </div>
          <div className="chartItem">
          <FiberManualRecordOutlinedIcon className="dotIndicator"/>
            <h3 className="chartItemText">completed projects</h3>
          </div>
          <div className="chartItem">
          <FiberManualRecordOutlinedIcon className="dotIndicator"/>
            <h3 className="chartItemText">pending projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetLg;
