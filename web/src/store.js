import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from './local-store'

Vue.use(Vuex)

// const d = [{title: 'Gotham', id: 'id1', updated: '201602'}, {title: 'Panorama', id: 'id2', updated: '201603'}]
// localStorage.setItem('watchlistTable', d)
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  watchlistTable: localStorage.getItem('watchlistTable') || [],
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  setWatchlistTable(state, data) {
    state.watchlistTable = data
    localStorage.setItem('watchlistTable', data)
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  setWatchlistTableAsync ({ commit }, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
