<template>
  <div class="columns">
    <div class="column">
      <div v-if="showFilters" class="box">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Filters</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" v-model="titleOrDescription" type="text" placeholder="By title or description">
                <span class="icon is-small is-left"><i class="fa fa-search"></i></span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" v-model="tag" @keyup.enter="addTag" type="text" placeholder="By tag">
              </p>
            </div>
          </div>
        </div>

        <div class="tags" style="justify-content: flex-end">
          <span v-for="tag in tags" class="tag is-info">{{ tag }}<button class="delete is-small" @click="removeTag(tag)"></button></span>
        </div>
      </div>
    </div>

    <div class="column is-narrow">
      <a class="button is-light" @click="hideFilters">
        <span class="icon is-small has-text-grey-light"><i class="fa fa-filter"></i></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filters',
    data () {
      return {
        tag: '',
        showFilters: false
      }
    },
    computed: {
      titleOrDescription: {
        get () { return this.$store.state.filters.titleOrDescription },
        set (value) { this.$store.commit('UPDATE_FILTERS', {titleOrDescription: value}) }
      },
      tags () {
        return this.$store.state.filters.tags
      }
    },
    methods: {
      addTag () {
        if (this.tag && this.tags.indexOf(this.tag) === -1) {
          let newTags = this.tags.slice()
          newTags.push(this.tag)
          this.$store.commit('UPDATE_FILTERS', {tags: newTags})
          this.tag = ''
        }
      },
      removeTag (tag) {
        let index = this.tags.indexOf(tag)
        if (index > -1) {
          let newTags = this.tags.slice()
          newTags.splice(index, 1)
          this.$store.commit('UPDATE_FILTERS', {tags: newTags})
        }
      },
      hideFilters () {
        this.showFilters = !this.showFilters
      }
    }
  }
</script>
