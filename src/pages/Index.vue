<template>
  <ul class="index">
    <li>
      <router-link to="/basic-geometries">Basic Geometries</router-link>
    </li>
    <li>
      <router-link to="/css3d">CSS 3D</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<style scoped>
  .index {
    margin: 2rem;
  }
</style>
