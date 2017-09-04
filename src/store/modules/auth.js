import * as types from '../mutation-types'

const state = {
  isAuthenticated: localStorage.getItem('token') === process.env.DROPBOX_ACCESS_TOKEN.substring(0, 4)
}

const mutations = {
  [types.LOGIN] (state, token) {
    if (token === process.env.DROPBOX_ACCESS_TOKEN.substring(0, 4)) {
      localStorage.setItem('token', token)
      state.isAuthenticated = true
    }
  },
  [types.LOGOUT] (state) {
    localStorage.removeItem('token')
    state.isAuthenticated = false
  }
}

export default {
  state,
  mutations
}
