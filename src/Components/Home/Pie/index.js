import React, { useState } from "react"
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts"
import { logColor } from "../../../Helpers/consoleLogStyle";

const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];
function index(props) {
  const { data } = props
  logColor(data)
return (
<PieChart width={350} height={250}>
  <Tooltip/>
  <Pie data={data} dataKey="TxDistance" nameKey="LandCoverCategory" cx="50%" cy="50%" innerRadius={0} outerRadius={80} fill="#82ca9d" label />
</PieChart>
)
}

export default index