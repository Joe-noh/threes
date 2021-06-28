import { Engine, SceneLoader, HemisphericLight, ArcRotateCamera, Vector3, Color3 } from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import suzanne from '../assets/gltf/suzanne.gltf'
import { LoadingScreen } from '../lib/loading-screen'

const canvas = document.querySelector('canvas')

const engine = new Engine(canvas, true)
engine.loadingScreen = new LoadingScreen()

SceneLoader.Load(suzanne, undefined, engine, (scene) => {
  const camera = new ArcRotateCamera('camera', Math.PI / 2,  Math.PI / 2, 10, Vector3.Zero(), scene)
  camera.lowerRadiusLimit = 2
  camera.upperRadiusLimit = 20
  camera.attachControl(canvas, true)

  const light = new HemisphericLight('light', new Vector3(-1, 1, 0), scene);
  light.diffuse = Color3.White()

  engine.runRenderLoop(() => {
    scene.render()
  })
})

window.addEventListener('resize', () => {
  engine.resize()
})
