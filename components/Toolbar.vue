<template>
  <div>
    <nav
      class="navbar is-primary is-fixed-bottom is-hidden-mobile"
      role="navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item">Brand</div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="open = !open"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end is-hidden-mobile">
          <nuxt-link class="navbar-item" to="/">
            Home
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/medicines">
            Medicines
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/profile">
            Profile
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="navbar mobile-app-icon-bar is-hidden-tablet is-fixed-bottom">
      <button class="has-text-link">
        <i class="fa fa-home" aria-hidden="true"></i>
      </button>
      <button class="has-text-link">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </button>
      <button class="has-text-link">
        <i class="fa fa-upload" aria-hidden="true"></i>
      </button>
      <button @click="logout" class="has-text-link">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  methods: {
    async logout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.mobile-app-icon-bar {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  background: #fefefe;
  bottom: 0;
}

.mobile-app-icon-bar button {
  padding: 1.25rem;
  cursor: pointer;
  background: white;
  outline: none;
  border: 0px;
}

.mobile-app-icon-bar button svg,
.mobile-app-icon-bar button i,
.mobile-app-icon-bar button img {
  font-size: 2rem;
  max-height: 2rem;
  max-width: 2rem;
}
</style>
