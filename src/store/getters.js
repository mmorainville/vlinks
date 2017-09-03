export const mainCounter = state => state.counters.main

export const getItemsAsArray = (state, getters) => () => {
  let itemsAsArray = []
  for (let id in state.items.all) {
    itemsAsArray.push(state.items.all[id])
  }
  return itemsAsArray.sort((a, b) => (b.addDate).localeCompare(a.addDate))
}

export const getItemById = (state, getters) => (id) => {
  return state.items.all[id]
}
