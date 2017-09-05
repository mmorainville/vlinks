<template>
  <div class="box">
    <article class="media">
      <!--<div class="media-left">
        <figure class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>-->
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.title }}</strong>
            <small>{{ item.addDate | date }}</small>
            <br>
            <small><a :href="item.url">{{ item.url }}</a></small>
            <br>
            {{ item.description }}
          </p>
        </div>

        <div class="columns">
          <div class="column is-narrow">
            <nav class="level is-mobile" style="height: 100%">
              <div class="level-left">
                <a v-if="isAuthenticated" class="level-item" @click="editItem">
                  <span class="icon is-small"><i class="fa fa-pencil"></i></span>
                </a>
                <a v-if="isAuthenticated" class="level-item" @click="deleteItem">
                  <span class="icon is-small"><i class="fa fa-trash-o"></i></span>
                </a>
                <router-link class="level-item" title="Permalink" :to="{ name: 'Item', params: { id: item.id }}">
                  <span class="icon is-small"><i class="fa fa-link"></i></span>
                </router-link>
              </div>
            </nav>
          </div>

          <div class="column">
            <div class="tags">
              <a v-for="tag in item.tags" class="tag" @click="addTag(tag)">{{ tag }}</a>
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
      item () {
        return this.$store.getters.getItemById(this.id)
      },
      ...mapState({
        isAuthenticated: state => state.auth.isAuthenticated
      }),
      tags () {
        return this.$store.state.filters.tags
      }
    },
    methods: {
      editItem () {
        this.$router.push({path: '/item-form', query: {id: this.item.id}})
      },
      deleteItem () {
        let canDelete = confirm('Are you sure you want to delete this link?')
        if (canDelete) {
          this.$store.dispatch('deleteItem', this.item.id)
        }
      },
      addTag (tag) {
        if (tag && this.tags.indexOf(tag) === -1) {
          let newTags = this.tags.slice()
          newTags.push(tag)
          this.$store.commit('UPDATE_FILTERS', {tags: newTags})
        }
      }
    },
    filters: {
      date: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.replace(new RegExp('-', 'g'), '/').replace('T', ' ')
      }
    }
  }
</script>
