<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong>
            <small>@johnsmith</small>
            <small>31m</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>

        <div class="columns">
          <div class="column is-narrow">
            <nav class="level is-mobile" style="height: 100%">
              <div class="level-left">
                <a class="level-item" @click="editItem">
                  <span class="icon is-small"><i class="fa fa-pencil"></i></span>
                </a>
                <a class="level-item" @click="deleteItem">
                  <span class="icon is-small"><i class="fa fa-trash-o"></i></span>
                </a>
              </div>
            </nav>
          </div>

          <div class="column">
            <div class="tags">
              <span class="tag">One</span>
              <span class="tag">Two</span>
              <span class="tag">Three</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'item',
    props: ['id'],
    computed: {
      ...mapState(['items'])
    },
    mounted () {
      console.log(this.items[this.id])
    },
    methods: {
      editItem () {
        this.$router.push({path: '/item-form', query: {id: 'test'}})
      },
      deleteItem () {
        let canDelete = confirm('Are you sure you want to delete this link?')
        if (canDelete) {
          console.log('Item deleted')
        }
      }
    }
  }
</script>
