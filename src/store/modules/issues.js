const state = {
  items: [],
}

// getters
const getters = {
  all: (state) => {
    return state.items.map(item => item)
  }
}

// actions
const actions = {
  addItem ({ commit }) {
    commit('pushItem', {time: Date.now()})
  }
}

// mutations
const mutations = {
  pushItem (state, item) {
    state.items.push(item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}