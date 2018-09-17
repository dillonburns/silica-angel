// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Meta from 'vue-meta'
import router from './router'
import VueAnalytics from 'vue-analytics'

import 'reset-css'

Vue.config.productionTip = false

Vue.use(Meta)

Vue.use(VueAnalytics, {
  id: 'UA-125046929-1'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
