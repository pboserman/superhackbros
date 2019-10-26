<template>
  <form>
    <div class="title is-2">Login</div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          v-model="account.email"
          class="input"
          type="email"
          placeholder="Email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
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
      </div>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    account: {
      email: '',
      password: ''
    }
  }),
  methods: {
    login() {
      // TODO: ADD FIREBASE AUTH HERE
      console.log({
        email: this.account.email,
        password: this.account.password
      })
      this.$router.push('/')
    }
  }
}
</script>
