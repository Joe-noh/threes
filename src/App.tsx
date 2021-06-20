import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './pages/index'
import BasicGeometries from './pages/basic-geometries'
import Suzanne from './pages/suzanne'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/basic-geometries" component={BasicGeometries} />
      <Route path="/suzanne" component={Suzanne} />
    </Switch>
  )
}

export default App
