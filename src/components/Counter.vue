<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" v-model="count" readonly>
    </p>
    <p class="control">
      <button class="button" @click="increment">+</button>
    </p>
    <p class="control">
      <button class="button" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'counter',
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
