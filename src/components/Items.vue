<template>
  <div class="c-items">
    <filters></filters>
    <item v-for="item in itemsAsArray" :key="item.id" :id="item.id"></item>
  </div>
</template>

<script>
  import Item from './Item.vue'
  import Filters from './Filters.vue'

  export default {
    name: 'items',
    components: {
      Filters,
      Item
    },
    computed: {
      itemsAsArray () {
        return this.$store.getters.getItemsAsArray()
      }
    }
  }
</script>
