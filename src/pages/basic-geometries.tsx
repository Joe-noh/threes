import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3, Color4 } from '@babylonjs/core'
import { useFullSize } from '../hooks/full-size'

export default function BasicGeometries() {
  const { width, height } = useFullSize()

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylon' width={width} height={height}>
      <Scene clearColor={Color4.FromHexString('#12345678')}>
        <arcRotateCamera
          name="camera"
          target={Vector3.Zero()}
          alpha={Math.PI / 3}
          beta={Math.PI / 4}
          upperBetaLimit={Math.PI / 2}
          radius={10}
          lowerRadiusLimit={5}
          upperRadiusLimit={20}
        />

        <hemisphericLight name='light1' direction={Vector3.Up()} />
        <directionalLight name='light2' setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position={new Vector3(5, 10, 5)} intensity={0.5}>
          <shadowGenerator mapSize={1024} shadowCasters={['box', 'sphere', 'torus']} useBlurExponentialShadowMap blurKernel={8} />
        </directionalLight>

        <box name='box' position={new Vector3(-1, 0.5, -1)}>
          <standardMaterial name='boxMaterial' diffuseColor={Color3.FromHexString('#0b6623')} />
        </box>
        <sphere name='sphere' position={new Vector3(0, 0.5, 2)}>
          <standardMaterial name='sphereMaterial' diffuseColor={Color3.FromHexString('#ff0000')} />
        </sphere>
        <torus name='torus' thickness={0.5} tessellation={32} position={new Vector3(2, 0.25, -1)}>
          <standardMaterial name='torusMaterial' diffuseColor={Color3.FromHexString('#0000ff')} />
        </torus>

        <ground name='ground' width={10} height={10} receiveShadows>
          <standardMaterial name='groundMaterial' diffuseColor={Color3.FromHexString('#3bb143')} />
        </ground>
      </Scene>
    </Engine>
  )
}
