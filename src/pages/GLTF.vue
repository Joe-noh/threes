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
  import suzanne from '../gltf/suzanne.gltf'

  export default defineComponent({
    setup() {
      const container = ref<Element>(null)

      onMounted(() => {
        const { innerWidth, innerHeight } = window

        const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 200)
        camera.position.set(8, 8, 8)

        const scene = new Scene()
        scene.background = new Color(0xffffff)

        const hemiLight = new HemisphereLight(0xffffff, 0x000000)
        hemiLight.position.set(0, 20, 0)
        scene.add(hemiLight)

        const loader = new GLTFLoader()

        loader.load(suzanne, (gltf) => {
          gltf.scene.position.set(0, 1, 0)

          scene.add(gltf.scene)
        })

        const renderer = new WebGLRenderer({ antialias: true })
        renderer.setSize(innerWidth, innerHeight)

        container.value.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableZoom = false
        controls.update()

        function animate() {
          requestAnimationFrame(animate)

          renderer.render(scene, camera)
        }

        animate()
      })

      return { container }
    }
  })
</script>
