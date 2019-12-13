import '@mdi/font/css/materialdesignicons.css' //For mdi icon: <v-icon>mdi-chevron-up</v-icon>
import '@fortawesome/fontawesome-free/css/all.css' //For <v-icon>fas fa-lock</v-icon>
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

Vue.use(Vuetify)

var LRU = require("lru-cache")
const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
})

export default new Vuetify({
  theme: {
    // dark: true, //'light: true' is the default
    themes: {
      light: { //The color names must use camelCase ('blueGrey') CANNOT use the smallcase ('bluegrey') or get blank page
        primary: colors.cyan, //colors.cyan.base
        secondary: colors.lime,
        accent: colors.shades.black,
        anchor: colors.cyan.darken3 //By default, the theme service will use primary color for anchor tags
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107',
      },
      dark: {
        primary: colors.cyan.lighten2, //colors.cyan.base
        secondary: colors.lime.lighten2,
        accent: colors.shades.white,
        anchor: colors.cyan.lighten4 //By default, the theme service will use primary color for anchor tags
      },
    },
    options: {
      // customProperties: true, //It will generate the inline css variable sheet <style id="vuetify-theme-stylesheet"> in html
      //Guide-https://vuetifyjs.com/en/customization/theme#custom-properties
      customProperties: process.env.NODE_ENV === 'production' ? false : true,
      // cspNonce: 'shenyang', //It is the nonce of the css variable sheet above
      minifyTheme: function (css) { //This will minify the css files size
        return process.env.NODE_ENV === 'production'
          ? css.replace(/[\r\n|\r|\n]/g, '')
          : css
      },
      themeCache,
    },
  },
  icons: {
    // iconfont: 'mdi', // 'mdi' || 'mdiSvg', 'mdi' is the default - only for display purposes
    iconfont: 'mdi' || 'mdiSvg' || 'faSvg',
    values: {
      // Register custom svg FontAwesomeIcon and :<v-icon class="black--text">$vuetify.icons.hand_paper</v-icon> (without using iconfont)
      // hand_paper: {
      //   component: FontAwesomeIcon,
      //   props: {
      //     icon: ['far', 'hand-paper'],
      //   },
      // },
    },
  },
});
