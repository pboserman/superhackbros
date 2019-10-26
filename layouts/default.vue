<template>
  <div class="has-navbar-fixed-bottom">
    <nuxt />
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

<style></style>
