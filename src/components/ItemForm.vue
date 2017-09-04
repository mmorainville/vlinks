<template>
  <div class="c-item-form">
    <!--<pre>{{ item }}</pre>-->

    <div class="box">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" v-model="item.title" type="text" placeholder="Title">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-small" v-model="item.addDate" type="datetime-local" placeholder="Add date">
        </div>
      </div>

      <div class="field">
        <label class="label">URL</label>
        <div class="control has-icons-left">
          <input class="input" v-model="item.url" type="text" placeholder="URL">
          <span class="icon is-small is-left"><i class="fa fa-globe"></i></span>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" v-model="item.description" placeholder="Description"></textarea>
        </div>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input" v-model="tag" @keyup.enter="addTag" type="text" placeholder="Tag">
        </p>
        <p class="control">
          <a class="button" @click="addTag">
            Add tag
          </a>
        </p>
      </div>

      <div class="field is-grouped is-grouped-multiline">
        <div v-for="tag in item.tags" class="control">
          <div class="tags has-addons">
            <span class="tag is-info">{{ tag }}</span>
            <a class="tag is-delete" @click="removeTag(tag)"></a>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="item.isPrivate">
            Private
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="saveItem">Submit</button>
        </div>
        <div class="control">
          <router-link class="button is-link" to="/" exact>Cancel</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  const uuidv4 = require('uuid/v4')

  let timezoneOffset = (new Date()).getTimezoneOffset() * 60000

  export default {
    name: 'item-form',
    computed: {
      ...mapState({
        items: state => state.items.all
      })
    },
    data () {
      return {
        item: {
          id: uuidv4(),
          title: this.$route.query.title ? this.$route.query.title : '',
          url: this.$route.query.url ? this.$route.query.url : '',
          description: '',
          tags: [],
          isPrivate: false,
          addDate: (new Date(Date.now() - timezoneOffset)).toISOString().substring(0, 16)
        },
        tag: ''
      }
    },
    mounted () {
      if (this.$route.query.id && this.items[this.$route.query.id]) {
        this.item = JSON.parse(JSON.stringify(this.items[this.$route.query.id]))
      }
    },
    methods: {
      addTag () {
        if (this.tag && this.item.tags.indexOf(this.tag) === -1) {
          this.item.tags.push(this.tag)
          this.tag = ''
        }
      },
      removeTag (tag) {
        let index = this.item.tags.indexOf(tag)
        if (index > -1) {
          this.item.tags.splice(index, 1)
        }
      },
      saveItem () {
        this.$store.dispatch('saveItem', this.item)
      }
    }
  }
</script>
