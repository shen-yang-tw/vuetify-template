import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas, far, fab) // Include needed icons
// library.add(far) // Include needed icons
// library.add(fab) // Include needed icons

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // dark: true,
    light: {
      primary: colors.red.darken1, // #E53935
      secondary: colors.red.lighten4, // #FFCDD2
      accent: colors.indigo.base, // #3F51B5      primary: '#e91e63',
      // secondary: '#9c27b0',
      // accent: '#673ab7',
      // error: '#f44336',
      // warning: '#ff9800',
      // info: '#2196f3',
      // success: '#4caf50',
      anchor: '#8c9eff' //By default, the theme service will use primary color for anchor tags
    }
  },
  icons: {
    iconfont: 'faSvg' | 'mdiSvg' // 'mdi' || 'mdiSvg', 'mdi' is default - only for display purposes
  },
});
