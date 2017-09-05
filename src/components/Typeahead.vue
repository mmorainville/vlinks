<template>
  <p class="control">
    <input class="input" :value="value" @input="updateInput" @keyup.enter="submitValue()" type="text" :placeholder="placeholder">

    <nav v-if="showResults" class="c-typeahead__results panel">
      <a class="panel-block" v-for="value in existingValues" @click="submitValue(value)">
        {{ value }}
      </a>
    </nav>
  </p>
</template>

<script>
  export default {
    name: 'typeahead',
    props: ['value', 'on-submit', 'show-results', 'existing-values', 'placeholder'],
    methods: {
      updateInput (e) {
        this.$emit('input', e.target.value)
      },
      submitValue (value) {
        value ? this.onSubmit(value) : this.onSubmit()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-typeahead__results {
    position: absolute;
    background: white;
    width: 100%;
    z-index: 1;
  }
</style>
