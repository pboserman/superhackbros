<template>
  <div class="columns is-centered">
    <div class="column is-vcentered is-half">
      <div class="has-text-centered title">
        <div v-if="showWelcome" class="welcome is-black is-size-4">
          Welcome to
        </div>
        <div>
          <span class="is-black">Nurse</span><span class="is-green">Spree</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showWelcome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.is-black {
  color: black;
}
.is-green {
  color: #0befbf;
  font-weight: bold;
}
.welcome {
  padding-bottom: 15px;
}
</style>
