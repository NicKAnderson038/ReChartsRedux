import React, { useState } from "react"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import * as hData from '../../../Data/hData'
import { logColor } from "../../../Helpers/consoleLogStyle";

import PieExample from '../Pie'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const data1 = hData.hManagerData.StudyListResult

const data2 = [
  {
    "TxDistance": 50,
    "LandCoverCategory": "ocean",
  },
  {
    "TxDistance": 250,
    "LandCoverCategory": "jungle",
  },
  {
    "TxDistance": 70,
    "LandCoverCategory": "ocean",
  },
  {
    "TxDistance": 140,
    "LandCoverCategory": "ocean",
  }
]

function index() {
  const [flag, setFlag] = useState(true)
  const [data, setData] = useState(data1)
  
  const dataChangeHandler = () => {
    if (flag) {
      setData(data2)
      setFlag(false)
    } else {
      setData(data1)
      setFlag(true)
    }
  }

  return (
    <div style={styles}>
      <h1>Recharts basic demo</h1>
      <ResponsiveContainer
        width={100+'%'}
        height={300}
      >
      <BarChart data={data}>
        <XAxis dataKey="LandCoverCategory" />
        <YAxis dataKey="TxDistance" />
        <Tooltip/>
        <Bar dataKey="TxDistance" />
      </BarChart>
      </ResponsiveContainer>
      <br />
      <button onClick={() => dataChangeHandler()}>Transform</button>
      <br/>
      <br/>
      <PieExample
        data={data}
      />
    </div>
  )
}

export default index
