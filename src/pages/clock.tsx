import React, { useEffect, useRef } from 'react'
import { Engine, Scene, HemisphericLight, PointLight, ArcRotateCamera, MeshBuilder, StandardMaterial, Vector3, Color3 } from '@babylonjs/core'
import { useFullSize } from '../hooks/full-size'

export default function Clock() {
  const { width, height } = useFullSize()

  const canvasElement = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const engine = new Engine(canvasElement.current, true)
    engine.setSize(width, height)

    const scene = new Scene(engine)

    const camera = new ArcRotateCamera("Camera", -3 * Math.PI / 4, Math.PI / 3, 20, new Vector3(0, 0.5, 0), scene)
    camera.lowerRadiusLimit = 20
    camera.upperRadiusLimit = 20
    camera.attachControl(canvasElement, true)

    const light1 = new HemisphericLight("light1", new Vector3(-2.5, 10, 0), scene)
    light1.diffuse = Color3.White()
    light1.intensity = 0.4

    const light2 = new PointLight("light2", new Vector3(-2.5, 5, 0), scene)
    light2.diffuse = Color3.White()
    light2.intensity = 0.5

    const wallMaterial = new StandardMaterial('wallMaterial', scene)
    wallMaterial.specularColor = Color3.Black()

    const wall1 = MeshBuilder.CreateBox('wall1', { width: 5, height: 5, depth: 1 }, scene)
    wall1.position = new Vector3(0, 2, 2)
    wall1.material = wallMaterial

    const wall2 = MeshBuilder.CreateBox('wall2', { width: 1, height: 5, depth: 5 }, scene);
    wall2.position = new Vector3(2, 2, 0)
    wall2.material = wallMaterial

    const floor = MeshBuilder.CreateBox('floor', { width: 5, height: 1, depth: 5 }, scene);
    floor.position = new Vector3(0, 0, 0)
    floor.material = wallMaterial

    const clockBody = MeshBuilder.CreateCylinder('clockBody', { diameter: 1, height: 0.1 }, scene)
    clockBody.position = new Vector3(1.5, 3.0, -0.5)
    clockBody.rotation = new Vector3(0, 0, Math.PI / 2)

    const longHand = MeshBuilder.CreateCylinder('longHand', { diameter: 0.05, height: 0.5 }, scene)
    longHand.position = new Vector3(1.4, 3.25, -0.5)
    longHand.setPivotPoint(new Vector3(0, -0.25, 0))
    longHand.rotation = new Vector3(Math.PI / 3, 0, 0)

    const shortHand = MeshBuilder.CreateCylinder('shortHand', { diameter: 0.05, height: 0.3 }, scene)
    shortHand.position = new Vector3(1.4, 3.15, -0.5)
    shortHand.setPivotPoint(new Vector3(0, -0.15, 0))
    shortHand.rotation = new Vector3(Math.PI / 3, 0, 0)

    const tick = () => {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()

      const longHandRotation = -2 * Math.PI * (minute / 60)
      const shortHandRotation = -2 * Math.PI * (hour + (minute / 60)) / 12

      longHand.rotation.x = longHandRotation
      shortHand.rotation.x = shortHandRotation

      setTimeout(tick, 1000)
    }

    tick()

    engine.runRenderLoop(() => {
      scene.render()
    })

    window.addEventListener('resize', () => {
      engine.resize()
    })
  })

  return (
    <canvas ref={canvasElement} />
  )
}
