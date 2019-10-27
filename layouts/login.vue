<template>
  <div class="hero">
    <div class="hero-head"></div>
    <div class="hero-body">
      <Title />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
export default {
  components: {
    Title
  }
}
</script>

<style scoped>
.hero-body {
  width: 100%;
  height: 100vh;
}
</style>
