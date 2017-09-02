import * as types from '../mutation-types'

const state = {
  'test': {
    id: 'test',
    title: 'Item #1',
    url: 'https://example.com',
    description: 'Description',
    tags: ['test'],
    isPrivate: false,
    addDate: '2017-08-31T02:10'
  },
  'bla': {
    id: 'bla',
    title: 'Item #1',
    url: 'https://example.com',
    description: 'Description',
    tags: ['test'],
    isPrivate: false,
    addDate: '2017-08-31T02:10'
  },
  'test2': {
    id: 'test2',
    title: 'Item #1',
    url: 'https://example.com',
    description: 'Description',
    tags: ['test'],
    isPrivate: false,
    addDate: '2017-08-31T02:10'
  }
}

const mutations = {
  [types.SAVE_ITEM] (state, item) {
    state[item.id] = item
  },
  [types.DELETE_ITEM] (state, id) {
    delete state[id]
  }
}

export default {
  state,
  mutations
}
