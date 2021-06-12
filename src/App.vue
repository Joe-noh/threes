<template>
  <ul class="index">
    <li>aa</li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    setup() {
      onMounted(() => {
        console.log('a')
      })
    }
  })
</script>

<style scoped>
  .index {
    margin: 2rem;
  }
</style>
