<template>
  <div class="c-home">
    <navbar></navbar>

    <section class="section">
      <div class="container">
        <items></items>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Items from './Items.vue'

  export default {
    name: 'home',
    components: {
      Items,
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
  @import "~bulma/sass/utilities/initial-variables";

  .c-home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .section {
    flex: 1;
    background-color: $white-ter;
  }
</style>
