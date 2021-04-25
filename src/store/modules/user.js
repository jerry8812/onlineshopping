import {loginByEmail} from 'api/profile.js'

const user = {
  state: {
    email: '',
    password: ''
  },

  mutations: {
    SET_NAME: (state, email) => {
      state.email = email
    },
    SET_PASSWORD: (state, password) => {
      state.password = password
    }
  },

  // actions: {
  //   Login({ commit }, userData) {
  //     return new Promise((resolve, reject) => {
  //       loginByEmail(userData).then(res => {
  //         commit('SET_NAME', res.data.email)
  //         commit('SET_PASSWORD', res.data.password)
  //         resolve()
  //       })
  //     })
  //   }
  // }
}

export default user