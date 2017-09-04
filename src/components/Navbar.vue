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
          <router-link v-if="isAuthenticated" class="navbar-item" to="/item-form" exact>
            Add link
          </router-link>
          <a class="navbar-item" :href="'javascript:' + bookmarklet">Bookmarklet</a>
        </div>

        <div class="navbar-end">
          <div v-if="!isAuthenticated" class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <input class="input" v-model="token" type="text" placeholder="Dropbox token" @keyup.enter="login">
              </p>
              <p class="control">
                <a class="button is-primary" @click="login">
                  Login
                </a>
              </p>
            </div>
          </div>

          <div v-if="isAuthenticated" class="navbar-item">
            <div class="field">
              <p class="control">
                <a class="button is-primary" @click="logout">
                  Logout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'

  const baseUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')

  export default {
    name: 'navbar',
    computed: {
      ...mapState({
        isAuthenticated: state => state.auth.isAuthenticated
      })
    },
    data () {
      return {
        bookmarklet: `(function(){var%20url%20=%20location.href;
        var%20title%20=%20document.title%20||%20url;
        window.open('${baseUrl}/item-form?url='%20+%20encodeURIComponent(url)+'&title='%20+%20encodeURIComponent(title),'_blank','height=600,width=800');})();`,
        token: ''
      }
    },
    methods: {
      login () {
        this.$store.commit('LOGIN', this.token)
      },
      logout () {
        this.$store.commit('LOGOUT')
      }
    }
  }
</script>
