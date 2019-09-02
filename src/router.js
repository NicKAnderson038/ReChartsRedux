import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // withRouter
} from 'react-router-dom'

import Nav from './Components/UI/Nav'
// import ReChartsLineGraph from './Components/Recharts/LineGraph/Index'
// const Nav = lazy(() => import('./Components/UI/Nav'))
const ReChartsLineGraph = lazy(() => import('./Components/Recharts/LineGraph/Index'))
const BarChart = lazy(() => import('./Components/Home/Bar'))


const Loading = () => <div>Loading...</div>

const mainRouter = () => {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <BarChart
                header={'Bar Chart, Pie & Controls'}
                userSelect={{ userSelect: 'none' }}
                width={960}
                height={600}
                {...props}
              />
            )}
          />
          <Route
            path="/line-graph"
            render={props => (
              <ReChartsLineGraph
                header={'reCharts line Graph'}
                userSelect={{ userSelect: 'none' }}
                width={960}
                height={500}
                {...props}
              />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default mainRouter
