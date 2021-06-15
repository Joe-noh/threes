<template>
  <div ref="container" />
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import {
    PerspectiveCamera,
    Scene,
    HemisphereLight,
    WebGLRenderer,
    Color
  } from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import suzanne from '../gltf/donut.gltf'

  export default defineComponent({
    setup() {
      const container = ref<Element>(null)

      onMounted(() => {
        const donuts = []

        const { innerWidth, innerHeight } = window

        const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 20)
        camera.position.set(9, 9, 9)

        const scene = new Scene()
        scene.background = new Color(0xffffff)

        const hemiLight = new HemisphereLight(0xffffff, 0x000000)
        hemiLight.position.set(0, 20, 0)
        scene.add(hemiLight)

        const loader = new GLTFLoader()

        loader.load(suzanne, (gltf) => {
          for (let i = 0; i < 1000; i++) {
            const donut = gltf.scene.clone()

            const x = 10 * Math.random()
            const y = 10 * Math.random()
            const z = 10 * Math.random()
            const scale = 2 * Math.random() + 1

            donut.position.set(x, y, z)
            donut.rotation.set(0, Math.PI * Math.random(), 0)
            donut.scale.set(scale, scale, scale)
            donuts.push(donut)

            scene.add(donut)
          }
        })

        const renderer = new WebGLRenderer({ antialias: true })
        renderer.setSize(innerWidth, innerHeight)

        container.value.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableZoom = false
        controls.target.set(5, 5, 5)
        controls.update()

        function animate() {
          requestAnimationFrame(animate)

          for (let i = 0; i < donuts.length; i++) {
            donuts[i].rotation.y += 0.01
          }

          renderer.render(scene, camera)
        }

        animate()
      })

      return { container }
    }
  })
</script>
