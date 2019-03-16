const state = {
  current: '',
}

// getters
const getters = {
  currentPage: (state) => {
    return state.current
  }
}

// actions
const actions = {
  setCurrentRoute ({ commit }, route) {
    commit('setCurrentRouteName', route.name)
  }
}

// mutations
const mutations = {
  setCurrentRouteName (state, routeName) {
    state.current = routeName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}