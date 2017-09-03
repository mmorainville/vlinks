import * as types from './mutation-types'
import router from '@/router'
import { actions } from '@/shared/dropbox'

export const decrementMain = ({commit}) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({commit}) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

// Items
export const saveItem = ({commit}, item) => {
  commit(types.SAVE_ITEM, item)
  actions.upload()
  router.push('/')
}

export const deleteItem = ({commit}, id) => {
  commit(types.DELETE_ITEM, id)
  actions.upload()
}
