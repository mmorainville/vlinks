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
              <!--<p class="control">
                <input class="input" v-model="tag" @keyup.enter="addTag" type="text" placeholder="By tag">

                <nav v-if="showTypeaheadResults" class="c-typeahead__results panel">
                  <a class="panel-block" v-for="tag in existingFilteredTags" @click="addTag(tag)">
                    {{ tag }}
                  </a>
                </nav>
              </p>-->

              <typeahead v-model="tag" :on-submit="addTag" :show-results="showTypeaheadResults" :existing-values="existingFilteredTags" :placeholder="'By tag'"></typeahead>
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
  import { mapGetters } from 'vuex'
  import Typeahead from './Typeahead.vue'

  export default {
    name: 'filters',
    components: {
      Typeahead
    },
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
      },
      ...mapGetters({
        existingTags: 'getExistingTags'
      }),
      existingFilteredTags () {
        return this.existingTags().filter((element) => element.toLowerCase().includes(this.tag.toLowerCase()))
      },
      showTypeaheadResults () {
        return this.tag && this.existingFilteredTags.length > 0
      }
    },
    methods: {
      addTag (tag) {
        if (tag) {
          this.tag = tag
        }

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
