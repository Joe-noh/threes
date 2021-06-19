import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <ul style={{ margin: '2rem' }}>
      <li><Link to="/basic-geometries">Basic Geometries</Link></li>
    </ul>
  )
}
