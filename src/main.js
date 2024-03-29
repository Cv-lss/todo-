import Vue from 'vue'
import App from './App.vue'

import '@/assets/style/base.css'
import '@/assets/style/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
