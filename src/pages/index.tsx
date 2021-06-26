import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <ul style={{ margin: '2rem' }}>
      <li><Link to="/basic-geometries">Basic Geometries</Link></li>
      <li><Link to="/suzanne">Suzanne</Link></li>
      <li><Link to="/clock">Clock</Link></li>
      <li><Link to="/bone">Bone</Link></li>
      <li><Link to="/can">Can</Link></li>
      <li><Link to="/cloth">Cloth</Link></li>
    </ul>
  )
}
