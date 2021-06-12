<template>
  <div ref="container" />
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import {
    PerspectiveCamera,
    Scene,
    Color,
    HemisphereLight,
    DirectionalLight,
    BoxGeometry,
    ConeGeometry,
    SphereGeometry,
    PlaneGeometry,
    Mesh,
    MeshToonMaterial,
    WebGLRenderer
  } from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  export default defineComponent({
    setup() {
      const container = ref<Element>(null)

      let scene: Scene
      let camera: PerspectiveCamera
      let renderer: WebGLRenderer

      function animate() {
        requestAnimationFrame(animate)

        renderer.render(scene, camera)
      }

      onMounted(() => {
        const { innerWidth, innerHeight } = window

        camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 2000)
        camera.position.set(400, 200, 400)

        scene = new Scene()
        scene.background = new Color(0x65c2f5)

        const hemiLight = new HemisphereLight(0xffffff, 0x444444)
        hemiLight.position.set(0, 200, 0)
        scene.add(hemiLight)

        const directionalLight = new DirectionalLight(0xffffff)
        directionalLight.position.set(-100, 200, 100)
        directionalLight.castShadow = true
        directionalLight.shadow.camera.top = 300
        directionalLight.shadow.camera.bottom = -300
        directionalLight.shadow.camera.left = -300
        directionalLight.shadow.camera.right = 300
        scene.add(directionalLight)

        const cubeGeometry = new BoxGeometry(50, 50, 50)
        const cubeMaterial = new MeshToonMaterial({ color: 0x0b6623 })
        const cube = new Mesh(cubeGeometry, cubeMaterial)
        cube.castShadow = true
        cube.position.y = 25
        scene.add(cube)

        const ballGeometry = new ConeGeometry(20, 50, 36)
        const ballMaterial = new MeshToonMaterial({ color: 0xff0000 })
        const ball = new Mesh(ballGeometry, ballMaterial)
        ball.castShadow = true
        ball.position.set(200, 25, 100)
        scene.add(ball)

        const sphereGeometry = new SphereGeometry(25, 36, 36)
        const sphereMaterial = new MeshToonMaterial({ color: 0x1234ff })
        const sphere = new Mesh(sphereGeometry, sphereMaterial)
        sphere.castShadow = true
        sphere.position.set(-50, 25, 200)
        scene.add(sphere)

        const ground = new Mesh(new PlaneGeometry(800, 800), new MeshToonMaterial({ color: 0x3bb143, depthWrite: false }))
        ground.rotation.x = -Math.PI / 2
        ground.receiveShadow = true
        scene.add(ground)

        renderer = new WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(innerWidth, innerHeight)
        renderer.shadowMap.enabled = true

        container.value.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.target.y = 25
        controls.update()

        animate()
      })

      return { container }
    }
  })
</script>
