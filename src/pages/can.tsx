import React, { useEffect, useRef } from 'react'
import { Engine, Scene, Texture, HemisphericLight, ArcRotateCamera, PBRMetallicRoughnessMaterial, Vector3, Vector4, Color3, Color4, MeshBuilder } from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import { LoadingScreen } from '../lib/loading-screen'
import { useFullSize } from '../hooks/full-size'
import './can.css'

export default function Can() {
  const { width, height } = useFullSize()

  const canvasElement = useRef<HTMLCanvasElement>(null)
  let scene = useRef<Scene>()
  let pbr = useRef<PBRMetallicRoughnessMaterial>()

  useEffect(() => {
    const engine = new Engine(canvasElement.current, true)
    engine.loadingScreen = new LoadingScreen()
    engine.setSize(width, height)

    scene.current = new Scene(engine)

    const camera = new ArcRotateCamera("camera", Math.PI / 2,  Math.PI / 2, 10, Vector3.Zero(), scene.current)
    camera.lowerRadiusLimit = 2
    camera.upperRadiusLimit = 20
    camera.attachControl(canvasElement.current, true)

    const light = new HemisphericLight("light", Vector3.Up(), scene.current)
    light.diffuse = Color3.White()
    light.groundColor = Color3.White()

    const faceUV = [
      new Vector4(0, 0, 0, 0),
      new Vector4(1, 0, 0, 1),
      new Vector4(0, 0, 0, 0)
    ]

    const faceColors = [
      Color4.FromHexString('#ffffffff'),
      Color4.FromHexString('#ffffffff'),
      Color4.FromHexString('#ffffffff')
    ]

    pbr.current = new PBRMetallicRoughnessMaterial("pbr", scene.current)
    pbr.current.metallic = 0.8
    pbr.current.roughness = 0.3

    const can = MeshBuilder.CreateCylinder('can', { height: 3, diameter: 2, tessellation: 32, faceUV, faceColors }, scene.current)
    can.material = pbr.current

    engine.runRenderLoop(() => {
      scene.current?.render()
    })

    window.addEventListener('resize', () => {
      engine.resize()
    })
  })

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    const files = event?.target?.files || []
    const file = files[0]

    if (file) {
      reader.addEventListener('load', () => {
        const data = reader.result!.toString()
        if (pbr.current) {
          pbr.current.baseTexture = new Texture(data, scene.current!)
        }
      }, false)

      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container">
      <canvas ref={canvasElement} />
      <input className="upload-button" type="file" accept="image/png,image/jpeg" onChange={onChangeFile} />
    </div>
  )
}
