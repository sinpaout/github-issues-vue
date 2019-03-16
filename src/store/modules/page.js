const state = {
  current: '',
  loadings: 0
}

// getters
const getters = {
  currentPage: (state) => {
    return state.current
  },
  isLoading: (state) => {
    return state.loadings > 0
  }
}

// actions
const actions = {
  setCurrentRoute ({ commit }, route) {
    commit('setCurrentRouteName', route.name)
  },
  startRequest ({commit}, config) {
    commit('showIndicator', config)
  },
  endRequest ({commit}, response) {
    commit('hideIndicator', response.config)
  },
  errorRequest ({commit}, error) {
    // commit('ajaxError', error)
  }
}

// mutations
const mutations = {
  setCurrentRouteName (state, routeName) {
    state.current = routeName
  },
  showIndicator (state) {
    state.loadings = state.loadings + 1
  },
  hideIndicator (state) {
    state.loadings = state.loadings - 1
  },
  ajaxError (state, error = {}) {
    let errorStatus
    if (error && error.response) {
      errorStatus = error.response.status
    }
    state.error = {
      status: errorStatus
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}