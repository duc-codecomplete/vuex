import axios from "axios"

const state = {
  users: []
}

const getters = {
  activeUser: state => {
    return state.users.length
  }
}

const actions = {
  async getUser({commit}, data) {
    await axios.get('https://jsonplaceholder.typicode.com/users', data).then((res) => {
      console.log(res)
      commit('setuser', res.data)
    })
  }
}

const mutations = {
  setuser(state, data) {
    state.users = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}