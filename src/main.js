import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cors from 'cors'

Vue.config.productionTip = false
new Vue({
  router,
  cors,
  render: (h) => h(App),
}).$mount('#app')
