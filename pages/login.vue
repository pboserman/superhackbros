<template>
  <div class="container">
    <form @submit.prevent>
      <div class="subtitle">Login</div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="account.email"
            class="input"
            type="email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input
            v-model="account.password"
            class="input"
            type="password"
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="level is-mobile">
        <div class="level-right is-mobile">
          <div class="level-item is-mobile">
            <button type="submit" @click="login" class="button is-primary">
              Login
            </button>
          </div>
          <div v-if="isError" class="alert alert-danger">
            <p class="mb-0">{{ errMsg }}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  layout: 'login',
  data: () => ({
    account: {
      email: '',
      password: ''
    },
    isError: false,
    errMsg: ''
  }),
  methods: {
    login() {
      this.$store
        .dispatch('users/login', this.account)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          this.isError = true
          this.errMsg = error.code

          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 100px;
}
</style>
