<template>
  <div class="hello">
    <navbar></navbar>

    <section class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          {{ msg }}
        </h2>

        <div class="content">
          <p>{{ count }}</p>
        </div>

        <div class="field has-addons">
          <p class="control">
            <button class="button" @click="increment">+</button>
          </p>
          <p class="control">
            <button class="button" @click="decrement">-</button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'

  export default {
    name: 'hello',
    components: {
      Navbar
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    computed: {
      count () {
        return this.$store.state.counters.main
      }
    },
    methods: {
      increment () {
        this.$store.commit('INCREMENT_MAIN_COUNTER')
      },
      decrement () {
        this.$store.commit('DECREMENT_MAIN_COUNTER')
      }
    }
  }
</script>
