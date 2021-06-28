import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  DirectionalLight,
  ShadowGenerator,
  MeshBuilder,
  StandardMaterial,
  Vector3,
  Color3,
  Color4
} from '@babylonjs/core'

const canvas = document.querySelector('canvas')

const engine = new Engine(canvas, true)

const scene = new Scene(engine)
scene.clearColor = Color4.FromHexString('#12345678')

const camera = new ArcRotateCamera('camera', Math.PI / 3,  Math.PI / 4, 10, Vector3.Zero(), scene)
camera.lowerRadiusLimit = 5
camera.upperRadiusLimit = 20
camera.upperBetaLimit = Math.PI / 2
camera.attachControl(canvas, true)

new HemisphericLight('hemiLight', Vector3.Up(), scene)

const direction = new Vector3(-5, -15, -5)
const dirLight = new DirectionalLight('dirLight', direction, scene)
dirLight.position = direction.negate()
dirLight.intensity = 0.5

const box = MeshBuilder.CreateBox('box', {}, scene)
const boxMaterial = new StandardMaterial('boxMaterial', scene)
boxMaterial.diffuseColor = Color3.FromHexString('#0b6623')
box.position = new Vector3(-1, 0.5, -1)
box.material = boxMaterial

const sphere = MeshBuilder.CreateSphere('sphere', {}, scene)
const sphereMaterial = new StandardMaterial('sphereMaterial', scene)
sphereMaterial.diffuseColor = Color3.FromHexString('#ff0000')
sphere.position = new Vector3(0, 0.5, 2)
sphere.material = sphereMaterial

const torus = MeshBuilder.CreateTorus('torus', { thickness: 0.5, tessellation: 32 }, scene)
const torusMaterial = new StandardMaterial('torusMaterial', scene)
torusMaterial.diffuseColor = Color3.FromHexString('#0000ff')
torus.position = new Vector3(2, 0.25, -1)
torus.material = torusMaterial

const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene)
const groundMaterial = new StandardMaterial('groundMaterial', scene)
groundMaterial.diffuseColor = Color3.FromHexString('#3bb143')
ground.material = groundMaterial
ground.receiveShadows = true

const shadowGenerator = new ShadowGenerator(1024, dirLight)
shadowGenerator.useBlurExponentialShadowMap = true
shadowGenerator.blurKernel = 8

shadowGenerator.addShadowCaster(box)
shadowGenerator.addShadowCaster(sphere)
shadowGenerator.addShadowCaster(torus)

engine.runRenderLoop(() => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
