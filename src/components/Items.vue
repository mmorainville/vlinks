<template>
  <div class="c-items">
    <item v-for="item in items" :key="item.title"></item>
  </div>
</template>

<script>
  import Item from './Item.vue'

  export default {
    name: 'items',
    components: {
      Item
    },
    data () {
      return {
        items: [
          {
            title: 'Item #1',
            url: 'https://example.com',
            description: 'Description',
            tags: ['test'],
            isPrivate: false,
            addDate: '2017-08-31T02::10:00Z'
          },
          {
            title: 'Item #2'
          },
          {
            title: 'Item #3'
          }
        ]
      }
    }
  }
</script>
