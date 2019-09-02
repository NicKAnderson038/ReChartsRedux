import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import ReChartsLineGraph from './Components/Recharts/LineGraph'

const Nav = lazy(() => import('./Components/UI/Nav'))
// const OrginialD3 = lazy(() => import('./Components/OrginalD3'))

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
              // <OrginialD3
              //   header={'Original D3 example integrated into React'}
              //   userSelect={{ userSelect: 'none' }}
              //   width={960}
              //   height={600}
              //   {...props}
              // />
              <h1>Home Page</h1>
            )}
          />
          <Route
            path="/recharts-line-graph"
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
