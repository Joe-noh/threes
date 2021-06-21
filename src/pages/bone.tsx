import React, { useEffect, useRef } from 'react'
import { Engine, SceneLoader, HemisphericLight, ArcRotateCamera, Quaternion, Vector3, Color3, Color4 } from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import bone from '../assets/gltf/bone.gltf'
import { LoadingScreen } from '../lib/loading-screen'
import { useFullSize } from '../hooks/full-size'

export default function Bone() {
  const { width, height } = useFullSize()

  const canvasElement = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const engine = new Engine(canvasElement.current, true)
    engine.loadingScreen = new LoadingScreen()
    engine.setSize(width, height)

    SceneLoader.Load(bone, undefined, engine, (scene) => {
      scene.clearColor = Color4.FromHexString('#12345678')

      const mesh = scene.getMeshByName('Box')

      if (mesh?.skeleton) {
        let angle = 0
        const bones = mesh.skeleton.bones || []
        const index = mesh.skeleton.getBoneIndexByName('Bone2')
        const trasformNode = bones[index].getTransformNode()

        scene.registerBeforeRender(function () {
          Quaternion.FromEulerAnglesToRef(Math.sin(angle) / 2, Math.cos(angle), 0, trasformNode!.rotationQuaternion!)
          angle += 0.1
        })
      }

      const camera = new ArcRotateCamera('camera', 0, Math.PI / 3, 20, Vector3.Zero(), scene)
      camera.lowerRadiusLimit = 20
      camera.upperRadiusLimit = 20
      camera.attachControl(canvasElement.current, true)

      const light = new HemisphericLight('light', Vector3.Up(), scene)
      light.diffuse = Color3.White()
      light.groundColor = Color3.White()

      engine.runRenderLoop(() => {
        scene.render()
      })
    })

    window.addEventListener('resize', () => {
      engine.resize()
    })
  })

  return (
    <canvas ref={canvasElement} />
  )
}
