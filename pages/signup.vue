<template>
  <div>
    <div class="title is-8">Signup</div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
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
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="level is-mobile">
      <div class="level-right is-mobile">
        <div class="level-item is-mobile">
          <div class="button is-primary">Login</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>
