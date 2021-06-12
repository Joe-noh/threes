<template>
  <div>
    <div ref="container" class="container" />
    <div v-show="showBlocker" class="blocker" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import {
    PerspectiveCamera,
    Scene
  } from 'three'
  import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  export default defineComponent({
    setup() {
      const container = ref<Element>(null)
      const showBlocker = ref(false)

      onMounted(() => {
        const { innerWidth, innerHeight } = window

        const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 2000)
        camera.position.set(280, 0, 1000)

        const scene = new Scene()

        const div = document.createElement('div')
        div.style.width = '600px'
        div.style.height = '400px'
        div.style.backgroundColor = '#222'

        const iframe = document.createElement('iframe')
        iframe.style.width = '560px'
        iframe.style.height = '315px'
        iframe.style.left = '20px'
        iframe.style.top = '10px'
        iframe.style.position = 'absolute'
        iframe.style.border = '0px'
        iframe.src = 'https://www.youtube.com/embed/n9xhJrPXop4?controls=0'

        div.appendChild(iframe)

        const video = new CSS3DObject(div)
        scene.add(video)

        const renderer = new CSS3DRenderer()
        renderer.setSize(innerWidth, innerHeight)

        container.value.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minPolarAngle = Math.PI / 3
        controls.maxPolarAngle = 2 * Math.PI / 3
        controls.minAzimuthAngle = - Math.PI / 3
        controls.maxAzimuthAngle = Math.PI / 3
        controls.update()

        controls.addEventListener('start', () => {
          showBlocker.value = true
        })

        controls.addEventListener('end', () => {
          showBlocker.value = false
        })

        function animate() {
          requestAnimationFrame(animate)

          renderer.render(scene, camera)
        }

        animate()
      })

      return { container, showBlocker }
    }
  })
</script>

<style scoped>
  .container {
    background-color: #000000;
  }

  .blocker {
    position: absolute;
    inset: 0px;
  }
</style>
