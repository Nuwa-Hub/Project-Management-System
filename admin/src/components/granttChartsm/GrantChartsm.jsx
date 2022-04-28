import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "2014Spring",
    "Spring 2014",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 2, 25),
    null,
    100,
    null,
  ],
  [
    "2014Summer",
    "Summer 2014",
    "summer",
    new Date(2014, 2, 21),
    new Date(2014, 3, 20),
    null,
    100,
    null,
  ],
  [
    "2014Autumn",
    "Autumn 2014",
    "autumn",
    new Date(2014, 2, 21),
    new Date(2014,3, 20),
    null,
    100,
    null,
  ],
  [
    "2014Winter",
    "Winter 2014",
    "winter",
    new Date(2014, 2, 21),
    new Date(2014, 4, 1),
    null,
    100,
    null,
  ],

  [
    "2014inter",
    "Winter 2014",
    "winter",
    new Date(2014, 2, 21),
    new Date(2014, 4, 1),
    null,
    100,
    null,
  ],
  [
    "2015Spring",
    "Spring 2015",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 3, 20),
    null,
    50,
    null,
  ],
  [
    "2015Sring",
    "Spring 2015",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 3, 20),
    null,
    50,
    null,
  ],
  [
    "205Summer",
    "Summer 2015",
    "summer",
    new Date(2014, 2, 21),
    new Date(2014, 2, 25),
    null,
    0,
    null,
  ],
  [
    "201Summer",
    "Summer 2015",
    "summer",
    new Date(2014, 2, 21),
    new Date(2014, 2, 25),
    null,
    0,
    null,
  ],
  [
    "2015Summer",
    "Summer 2015",
    "summer",
    new Date(2014, 2, 21),
    new Date(2014, 2, 25),
    null,
    0,
    null,
  ],
 


  
];

export const data = [columns, ...rows];

export const options = {
  height: rows.length*30+50,
  gantt: {
    trackHeight: 30,
  },
};

export function GrantChartsm() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}

export default GrantChartsm