<template>
  <div>
    <div class="container">
      <nuxt />
    </div>
    <toolbar />
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import Title from '~/components/Title.vue'

export default {
  components: {
    Toolbar,
    Title
  }
}
</script>

<style scoped>
.container {
  padding-top: 15vh;
}
</style>
