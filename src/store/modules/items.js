import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  all: {}
}

const mutations = {
  [types.LOAD_ITEMS] (state, items) {
    state.all = Object.assign({}, items)
  },
  [types.SAVE_ITEM] (state, item) {
    state.all[item.id] = item
  },
  [types.DELETE_ITEM] (state, id) {
    Vue.delete(state.all, id)
  }
}

export default {
  state,
  mutations
}
