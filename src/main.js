import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {getImageUrl} from 'util/util.js'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.prototype.$imageUrl = getImageUrl

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
