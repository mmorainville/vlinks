<template>
  <p class="control">
    <input class="input" :value="value" @input="updateInput" @keyup.enter="submitValue()" @keyup.up="selectPreviousValue" @keyup.down="selectNextValue" type="text" :placeholder="placeholder">

    <nav v-if="showResults" class="c-typeahead__results panel">
      <a class="panel-block" v-for="value in existingValues" @click="submitValue(value)" :style="{ backgroundColor: currentSelectedValue === value ? 'whitesmoke' : 'white' }">
        {{ value }}
      </a>
    </nav>
  </p>
</template>

<script>
  export default {
    name: 'typeahead',
    props: ['value', 'on-submit', 'show-results', 'existing-values', 'placeholder'],
    data () {
      return {
        currentSelectedValue: ''
      }
    },
    methods: {
      updateInput (e) {
        this.currentSelectedValue = ''
        this.$emit('input', e.target.value)
      },
      submitValue (value) {
        if (value) {
          this.onSubmit(value)
        } else if (this.currentSelectedValue) {
          this.$emit('input', this.currentSelectedValue)
          this.onSubmit()
        } else {
          this.$emit('input', this.value)
          this.onSubmit()
        }
      },
      selectPreviousValue () {
        if (this.existingValues.indexOf(this.currentSelectedValue) === -1 || !this.currentSelectedValue) {
          this.currentSelectedValue = this.existingValues[this.existingValues.length - 1]
        } else {
          let index = this.existingValues.indexOf(this.currentSelectedValue)
          this.currentSelectedValue = index - 1 >= 0 ? this.existingValues[index - 1] : this.existingValues[this.existingValues.length - 1]
        }
      },
      selectNextValue () {
        if (this.existingValues.indexOf(this.currentSelectedValue) === -1 || !this.currentSelectedValue) {
          this.currentSelectedValue = this.existingValues[0]
        } else {
          let index = this.existingValues.indexOf(this.currentSelectedValue)
          this.currentSelectedValue = index + 1 < this.existingValues.length ? this.existingValues[index + 1] : this.existingValues[0]
        }
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
