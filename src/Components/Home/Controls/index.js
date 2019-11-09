import React, { useState, useRef } from 'react'

import * as hData from '../../../Data/hData'
import BarExample from '../Bar'
import PieExample from '../Pie'
import Doc from './DocService'
import { logColor } from '../../../Helpers/consoleLogStyle'

const styles = {
  display: 'flex',
  justifyContent: 'center'
}

const data1 = hData.hManagerData.StudyListResult

const data2 = [
  {
    TxDistance: 50,
    LandCoverCategory: 'ocean'
  },
  {
    TxDistance: 250,
    LandCoverCategory: 'jungle'
  },
  {
    TxDistance: 70,
    LandCoverCategory: 'ocean'
  },
  {
    TxDistance: 140,
    LandCoverCategory: 'ocean'
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
  const createPdf = html => Doc.createPdf(html)

  return (
    <div>
      <div>
        <BarExample data={data} createPdf={createPdf} />
        <br />
        <div style={styles}>
          <button onClick={() => dataChangeHandler()}>Transform</button>
          <PieExample data={data} />
        </div>
      </div>
    </div>
  )
}

export default index
