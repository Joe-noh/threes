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
camera.attachControl(canvas, true)

new HemisphericLight('hemiLight', Vector3.Up(), scene)

const direction = new Vector3(-5, -15, -5)
const dirLight = new DirectionalLight('dirLight', direction, scene)
dirLight.position = direction.negate()
dirLight.intensity = 0.5

const torusKnot = MeshBuilder.CreateTorusKnot('torusKnot', { radius: 1, tube: 0.2, radialSegments: 256, tubularSegments: 32, q: 4, p: 3 }, scene)
const torusKnotMaterial = new StandardMaterial('torusKnotMaterial', scene)
torusKnotMaterial.diffuseColor = Color3.FromHexString('#0000ff')
torusKnot.position = new Vector3(0, 0, 0)
torusKnot.material = torusKnotMaterial

const shadowGenerator = new ShadowGenerator(1024, dirLight)
shadowGenerator.useBlurExponentialShadowMap = true
shadowGenerator.blurKernel = 8

shadowGenerator.addShadowCaster(torusKnot)

engine.runRenderLoop(() => {
  scene.render()
})

window.addEventListener('resize', () => {
  engine.resize()
})
