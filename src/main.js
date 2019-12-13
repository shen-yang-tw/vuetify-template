import Vue from 'vue'
// import UIkit from 'uikit'
// import Icons from 'uikit/dist/js/uikit-icons'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

// UIkit.use(Icons)
Vue.use(Vuikit)
Vue.use(VuikitIcons)

import App from './App.vue'
import vuetify from './plugins/vuetify';
import '../src/scss/main.scss'
//Import all global js or css files here that will work in all pages

//Set false to prevent the production tip on Vue startup: https://vuejs.org/v2/api/index.html#productionTip
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
