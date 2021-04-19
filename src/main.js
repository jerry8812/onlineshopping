import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import {getImageUrl} from 'util/util.js'

Vue.config.productionTip = false
Vue.prototype.$imageUrl = getImageUrl

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
