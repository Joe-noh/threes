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
  Color4,
  AmmoJSPlugin,
  PhysicsImpostor
} from '@babylonjs/core'
import Ammo from 'ammojs-typed'

const canvas = document.querySelector('canvas')

Ammo().then(ammo => {
  const engine = new Engine(canvas, true)

  const scene = new Scene(engine)
  scene.clearColor = Color4.FromHexString('#12345678')

  scene.enablePhysics(null, new AmmoJSPlugin(true, ammo))

  const camera = new ArcRotateCamera('camera', 0, Math.PI / 3, 20, Vector3.Zero(), scene)
  camera.lowerRadiusLimit = 10
  camera.upperRadiusLimit = 20
  camera.attachControl(canvas, true)

  new HemisphericLight('light', Vector3.Down(), scene)

  const dirLight = new DirectionalLight('dir02', new Vector3(-1, -5, -1), scene)
  dirLight.diffuse = Color3.White()
  dirLight.intensity = 1
  dirLight.position = new Vector3(1, 10, 0)

  const cloth = MeshBuilder.CreateGround('cloth', { width: 5, height: 5, subdivisions: 30 }, scene)
  const clothMaterial = new StandardMaterial('clothMaterial', scene)

  clothMaterial.diffuseColor = Color3.FromHexString('#3CB371')

  cloth.material = clothMaterial
  cloth.receiveShadows = true
  cloth.position.y = 7

  cloth.physicsImpostor =  new PhysicsImpostor(cloth, PhysicsImpostor.ClothImpostor, { mass: 1, margin: 0.15, damping: 0.02, friction: 0.5, restitution: 1 }, scene)
  cloth.physicsImpostor.velocityIterations = 10
  cloth.physicsImpostor.positionIterations = 10
  cloth.physicsImpostor.stiffness = 1

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene)
  const sphereMaterial = new StandardMaterial('sphereMaterial', scene)

  sphereMaterial.diffuseColor = Color3.FromHexString('#EEEEEE')

  sphere.material = sphereMaterial
  sphere.receiveShadows = true
  sphere.position.z = 1
  sphere.position.y = 2

  sphere.physicsImpostor = new PhysicsImpostor(sphere, PhysicsImpostor.SphereImpostor, { mass: 0, friction: 0.5, restitution: 0 }, scene)

  const shadowGenerator = new ShadowGenerator(2048, dirLight)

  shadowGenerator.addShadowCaster(cloth)
  shadowGenerator.addShadowCaster(sphere)

  const ground = MeshBuilder.CreateGround('ground', { width: 20, height: 20 }, scene)
  const groundMaterial = new StandardMaterial('groundMaterial', scene)

  groundMaterial.diffuseColor = Color3.FromHexString('#DEB887')
  groundMaterial.roughness = 1
  groundMaterial.specularColor = Color3.Black()

  ground.material = groundMaterial
  ground.receiveShadows = true

  ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0 }, scene)

  engine.runRenderLoop(() => {
    scene.render()
  })

  window.addEventListener('resize', () => {
    engine.resize()
  })
})
