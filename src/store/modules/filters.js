import * as types from '../mutation-types'

const state = {
  titleOrDescription: '',
  tags: []
}

const mutations = {
  [types.UPDATE_FILTERS] (state, filters) {
    state = Object.assign(state, filters)
  }
}

export default {
  state,
  mutations
}
