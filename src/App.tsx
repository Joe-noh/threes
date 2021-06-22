import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './pages/index'
import BasicGeometries from './pages/basic-geometries'
import Suzanne from './pages/suzanne'
import Clock from './pages/clock'
import Bone from './pages/bone'
import Can from './pages/can'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/basic-geometries" component={BasicGeometries} />
      <Route path="/suzanne" component={Suzanne} />
      <Route path="/clock" component={Clock} />
      <Route path="/bone" component={Bone} />
      <Route path="/can" component={Can} />
    </Switch>
  )
}

export default App
