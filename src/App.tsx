import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'
import { useFullSize } from './hooks/full-size'

function App() {
  const { width, height } = useFullSize()

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylon' width={width} height={height}>
      <Scene>
        <arcRotateCamera name="camera" target={Vector3.Zero()} alpha={Math.PI / 3} beta={Math.PI / 4} radius={10} />
        <hemisphericLight name='light' direction={Vector3.Up()} />
        <box name='box' position={Vector3.Zero()}>
          <standardMaterial name='boxMaterial' diffuseColor={Color3.FromHexString('#669130')} />
        </box>
      </Scene>
    </Engine>
  )
}

export default App
