<template>
  <div class="has-navbar-fixed-bottom">
    <div class="profile">
      <nuxt />
    </div>
    <toolbar />
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'

export default {
  components: {
    Toolbar
  }
}
</script>

<style scoped>
.container {
  padding-top: 15vh;
}
.profile {
  padding-bottom: 100px;
  padding-top: 20px;
}
</style>
