<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/" exact>
          <img src="../assets/logo.png" alt="Vue.js PWA">
        </router-link>

        <div class="navbar-burger burger" data-target="c-navbar__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="c-navbar__menu" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/item-form" exact>
            Add link
          </router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
            Login
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
