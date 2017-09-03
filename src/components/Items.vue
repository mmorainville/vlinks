<template>
  <div class="c-items">
    <item v-for="item in itemsAsArray" :key="item.id" :id="item.id"></item>
  </div>
</template>

<script>
  import Item from './Item.vue'

  export default {
    name: 'items',
    components: {Item},
    computed: {
      itemsAsArray () {
        return this.$store.getters.getItemsAsArray()
      }
    }
  }
</script>
