<template>
  <div class="hello">
    <navbar></navbar>

    <section class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          {{ msg }}
        </h2>
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
    }
  }
</script>
