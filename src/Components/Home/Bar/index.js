import React from "react"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

function index(props) {
 
  const { data } = props

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
    </div>
  )
}

export default index
