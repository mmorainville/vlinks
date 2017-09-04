export const mainCounter = state => state.counters.main

export const getItemsAsArray = (state, getters) => () => {
  let itemsAsArray = []

  for (let id in state.items.all) {
    itemsAsArray.push(state.items.all[id])
  }

  // Filters
  itemsAsArray = itemsAsArray.filter((element) => {
    return (
      element.title.toLowerCase().includes(state.filters.titleOrDescription.toLowerCase()) ||
      element.description.toLowerCase().includes(state.filters.titleOrDescription.toLowerCase())
    ) && (state.filters.tags.length === 0 || element.tags.some(element => state.filters.tags.includes(element)))
  })

  return itemsAsArray.sort((a, b) => (b.addDate).localeCompare(a.addDate))
}

export const getItemById = (state, getters) => (id) => {
  return state.items.all[id]
}
