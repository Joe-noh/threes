import { Engine, SceneLoader, HemisphericLight, DirectionalLight, ArcRotateCamera, Quaternion, Vector3, Color3, Color4 } from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import bone from '../assets/gltf/bone.gltf'
import { LoadingScreen } from '../lib/loading-screen'

const canvas = document.querySelector('canvas')

const engine = new Engine(canvas, true)
engine.loadingScreen = new LoadingScreen()

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
  camera.attachControl(canvas, true)

  const hemiLight = new HemisphericLight('hemiLight', Vector3.Up(), scene)
  hemiLight.diffuse = Color3.White()

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -5, -1), scene)
  dirLight.diffuse = Color3.White()
  dirLight.position = new Vector3(1, 10, 0)

  engine.runRenderLoop(() => {
    scene.render()
  })
})

window.addEventListener('resize', () => {
  engine.resize()
})
