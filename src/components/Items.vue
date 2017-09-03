<template>
  <div class="c-items">
    <item v-for="(item, key) in items" :key="item.id" :id="item.id"></item>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Item from './Item.vue'

  export default {
    name: 'items',
    components: {Item},
    computed: mapState({
      items: state => state.items.all
    })
  }
</script>
