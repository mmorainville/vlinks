<template>
  <div class="c-home">
    <navbar></navbar>

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Items from './Items.vue'
  import {actions} from '@/shared/dropbox'

  export default {
    name: 'home',
    components: {
      Items,
      Navbar
    },
    mounted () {
      actions.download()
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
