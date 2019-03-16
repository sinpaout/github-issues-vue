import api from '../../service/api'

const state = {
  items: [],
  issues: null,
}

// getters
const getters = {
  all: (state) => {
    return state.items.map(item => item)
  },
  allIssues: (state) => {
    return state.issues && state.issues.filter(issue => !issue.pull_request) || []
  },
  openIssues: (state, getters) => {
    return getters.allIssues.filter(issue => issue.state === 'open')
  },
  closedIssues: (state, getters) => {
    return getters.allIssues.filter(issue => issue.state === 'closed')
  }
}

// actions
const actions = {
  loadIssues ({commit}) {
    api.get('repos/sinpaout/first-github/issues?state=all').then((result) => {
      commit('setIssues', result)
    })
  },
  addItem ({ commit }) {
    commit('pushItem', {time: Date.now()})
  },
  updateState ({ dispatch }, {number, state}) {
    api.patch(`repos/sinpaout/first-github/issues/${number}`, {state}).then(() => {
      dispatch('loadIssues')
    })
  }
}

// mutations
const mutations = {
  setIssues (state, payload) {
    state.issues = payload
  },
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