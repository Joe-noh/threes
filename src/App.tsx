import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './pages/index'
import BasicGeometries from './pages/basic-geometries'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/basic-geometries" component={BasicGeometries} />
    </Switch>
  )
}

export default App
