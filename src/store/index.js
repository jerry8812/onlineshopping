import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  imgBaseUrl: 'http://localhost:8080/images/'
}
const store = new Vuex.Store({
  state,
  getters,
  modules: {
    user
  }
})

export default store