export const mainCounter = state => state.counters.main

export const getItemById = (state, getters) => (id) => {
  return state.items.all[id]
}
