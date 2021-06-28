import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  MeshBuilder,
  StandardMaterial,
  PBRMetallicRoughnessMaterial,
  Texture,
  Vector3,
  Vector4,
  Color3,
  Color4
} from '@babylonjs/core'
import { LoadingScreen } from '../lib/loading-screen'

const canvas = document.querySelector('canvas')

const engine = new Engine(canvas, true)
engine.loadingScreen = new LoadingScreen()

const scene = new Scene(engine)

const camera = new ArcRotateCamera('camera', Math.PI / 2,Math.PI / 2, 10, Vector3.Zero(), scene)
camera.lowerRadiusLimit = 2
camera.upperRadiusLimit = 20
camera.attachControl(canvas, true)

const light = new HemisphericLight('light', Vector3.Up(), scene)
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

const pbr = new PBRMetallicRoughnessMaterial('pbr', scene)
pbr.metallic = 0.8
pbr.roughness = 0.3

const can = MeshBuilder.CreateCylinder('can', { height: 3, diameter: 2, tessellation: 32, faceUV, faceColors }, scene)
can.material = pbr

engine.runRenderLoop(() => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})

const form = document.createElement('form')
form.style.position = 'absolute'
form.style.width = '100%'
form.style.bottom = '2rem'
form.style.display = 'flex'
form.style.justifyContent = 'center'

const input = document.createElement('input')
input.type = 'file'
input.accept = 'image/png,image/jpeg'

input.addEventListener('change', (event: Event) => {
  const reader = new FileReader()
  const target = event?.target as HTMLInputElement
  const files = target?.files || []

  if (files[0]) {
    reader.addEventListener('load', () => {
      const data = reader.result!.toString()
      if (pbr) {
        pbr.baseTexture = new Texture(data, scene!)
      }
    }, false)

    reader.readAsDataURL(files[0])
  }
})

form.appendChild(input)
document.body.appendChild(form)
