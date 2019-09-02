import React, { useState } from "react"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts"

import * as hData from '../../../Data/hData'
import { logColor } from "../../../Helpers/consoleLogStyle";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const data1 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

const data2 = [
  { quarter: 1, earnings: 10000 },
  { quarter: 2, earnings: 16000 },
  { quarter: 3, earnings: 33050 },
  { quarter: 4, earnings: 11500 },
  { quarter: 5, earnings: 11500 }
]

function index() {
  const [flag, setFlag] = useState(true)
  const [data, setData] = useState(data1)
  logColor(hData)
  logColor(data)
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
        <XAxis dataKey="quarter" />
        <YAxis dataKey="earnings" />
        <Bar dataKey="earnings" />
      </BarChart>
      </ResponsiveContainer>
      <br />
      <button onClick={() => dataChangeHandler()}>Transform</button>
    </div>
  )
}

export default index
