<template>
  <v-app :style="{ fontSize: font.fontSize.toFixed(1) + 'em' }">
    <!-- <v-app v-on:enlarge-text="onEnlargeText"> -->
    <!-- <vk-card>Stick 100px below the top</vk-card> -->

    <!-- <v-navigation-drawer app>
      Left Side Menu
    </v-navigation-drawer> -->

    <v-app-bar
      app
      color="#43a047"
      dark
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-threshold="500"
      fixed
      dense
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          opacity=".5"
        ></v-img>
      </template>

      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Link One</v-btn>
        <v-btn text>Link Two</v-btn>
        <v-btn text>Link Three</v-btn>
        <!-- <v-btn icon @click="htmlClass(font.largeFont, font.smallFont)"> -->
        <!-- <v-btn icon @click="plus" :disabled="font.fontSize >= font.max"> -->
        <v-btn
          icon
          @click="fontPlus"
          :disabled="font.fontSizePx >= font.maxFont"
        >
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="htmlClass('resetFont', font.resetFont)"> -->
        <v-btn icon @click="reset">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="htmlClass(font.smallFont, font.largeFont)"> -->
        <!-- <v-btn icon @click="minus" :disabled="!font.min ? 'true': undefined"> -->
        <!-- <v-btn icon @click="minus" :disabled="font.fontSize <= font.min"> -->
        <v-btn
          icon
          @click="fontMinus"
          :disabled="font.fontSizePx <= font.minFont"
        >
          <v-icon>mdi-magnify-minus-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
      <!-- <v-btn icon @click="$emit('enlarge-text', 1)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->

      <template v-slot:extension>
        <!-- <v-tabs centered background-color="transparent">
          <v-tab v-for="n in 8" :key="n">Tab {{n}}</v-tab>
        </v-tabs> -->
        <Tabs
          :model="tabs.model"
          :tabs="tabs.tabOnly"
          :icons="tabs.icons"
          :centered="tabs.centered"
          :bgColor="tabs.bgColor"
          :contents="tabs.noContents"
        />
      </template>
    </v-app-bar>

    <v-content>
      <v-sheet min-height="1200">
        <CarouselImages
          :showArrows="carousel.arrows"
          :showArrowsOnHover="carousel.arrowsOnHover"
          :hideDelimiters="carousel.hideDelimiters"
          :cycle="carousel.cycle"
          :items="carousel.slides"
          :align="carousel.captionAlign"
          :justify="carousel.captionJustify"
          :color="carousel.captionBg"
          :rowClass="carousel.rowClass"
          :customClass="carousel.captionSheetClass"
          :captionClass="carousel.captionClass"
        />
        <Tabs
          :model="tabs.model"
          :tabs="tabs.tab"
          :icons="tabs.icons"
          :grow="tabs.grow"
          :centered="tabs.centered"
          :bgColor="tabs.bgColor"
          :contents="tabs.contents"
          :transition="tabs.transition"
          :reverseTransition="tabs.reverseTransition"
        />
        <v-container fluid>
          <BreadCrumb
            :breadcrumb="breadcrumb.links"
            :divider="breadcrumb.divider"
          />
          {{ font.fontSize.toFixed(1) }}
          {{ htmlFont() }}
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>

    <v-btn
      v-scroll="onScroll"
      v-show="btnToTop.show"
      fab
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <!-- <v-icon>fas fa-angle-up</v-icon> -->
      <font-awesome-icon :icon="['fas', 'angle-up']" size="lg" />
      <!-- <v-icon class="black--text">mdi-chevron-up</v-icon> -->
    </v-btn>
  </v-app>
</template>

<script>
// var js = require('script.js')
import BreadCrumb from '@/components/BreadCrumb.vue'
import CarouselImages from '@/components/CarouselImages.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  name: 'App',
  components: {
    // BreadCrumb: () => import("@/components/BreadCrumb.vue")
    BreadCrumb,
    CarouselImages,
    Tabs
  },
  data: () => ({
    breadcrumb: {
      links: [
        { disabled: false, href: 'breadcrumbs_dashboard', text: 'Link1' },
        { disabled: true, href: 'breadcrumbs_dashboard', text: 'Link2' }
      ],
      divider: '>'
    },
    carousel: {
      arrows: true,
      arrowsOnHover: true,
      hideDelimiters: false,
      cycle: false, //Auto play
      slides: [
        {
          src: 'https://picsum.photos/id/200/1920/600',
          caption: 'Slide1'
        },
        {
          src: 'https://picsum.photos/id/310/1920/600',
          caption: 'Slide2'
        },
        {
          src: 'https://picsum.photos/id/400/1920/600',
          caption: 'Slide3'
        }
      ],
      rowClass: 'fill-height pa-3',
      captionAlign: 'end',
      captionJustify: 'end',
      captionBg: 'rgba(255, 0, 0, 0.5)',
      captionSheetClass: 'mb-12 mr-2 px-4',
      captionClass: 'ma-0 max-w-xl'
    },
    font: {
      fontSize: 1,
      min: 0.5,
      max: 5,
      defaultSize: 18,
      fontSizePx: 18,
      minFont: 12,
      maxFont: 24,
      resetFont: ['smallFont', 'largeFont'],
      smallFont: 'smallFont',
      largeFont: 'largeFont'
    },
    appBar: {
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: false,
      extended: false,
      color: 'accent',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange']
    },
    btnToTop: {
      show: false
    },
    tabs: {
      model: null, //It must be null or not working
      centered: true,
      bgColor: 'transparent',
      contents: true,
      noContents: false,
      grow: true,
      icons: false,
      transition: false,
      reverseTransition: false,
      tab: [
        {
          icon: '',
          name: '隊法紅醫小提',
          href: '',
          disabled: false,
          text:
            '小代供家岸就要，國處際，觀變在令盡山發因了時老，簡有現表：學人發護中地手細力年。對是以影顯內在還請等家我舉空子麼天特？認有們。裡領吸天表時意不那出所條爸生也。'
        },
        {
          icon: '',
          name: '久養當特出車',
          href: '',
          disabled: false,
          text: '去我走做動過性好身一文：書先寶。成利當說錯壓孩間一連他把。'
        },
        {
          icon: '',
          name: '他縣是力路也能幾取行',
          href: 'https://www.google.com/',
          disabled: true,
          target: '_blank',
          text: ''
        }
      ],
      tabOnly: [
        {
          icon: '',
          name: 'Tab1',
          href: '',
          disabled: true,
          text:
            '小代供家岸就要，國處際，觀變在令盡山發因了時老，簡有現表：學人發護中地手細力年。對是以影顯內在還請等家我舉空子麼天特？認有們。裡領吸天表時意不那出所條爸生也。'
        },
        {
          icon: '',
          name: 'Tab2',
          href: '',
          disabled: true,
          text: '去我走做動過性好身一文：書先寶。成利當說錯壓孩間一連他把。'
        },
        {
          icon: '',
          name: 'Tab3',
          href: 'https://www.google.com/',
          disabled: true,
          target: '_blank',
          text: ''
        }
      ]
    }
  }),
  methods: {
    onScroll(e) {
      //e is event
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.btnToTop.show = top > 20 //The goto button shows when scroll to bottom more than 20px
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    fontPlus() {
      const el = document.querySelector('html')
      const font = (this.font.fontSizePx += 1)
      el.style.fontSize = font + 'px'
      if (font >= this.font.maxFont) return //stops and returns a value
    },
    fontMinus() {
      const el = document.querySelector('html')
      const font = (this.font.fontSizePx -= 1)
      el.style.fontSize = font + 'px'
      if (font <= this.font.minFont) return
    },
    plus() {
      //Stop when the value is 5
      if (this.font.fontSize >= this.font.max) return
      this.font.fontSize += 0.5
    },
    minus() {
      //Stop when the value is 0.5
      if (this.font.fontSize <= this.font.min) return
      this.font.fontSize -= 0.5
    },
    htmlClass(addClassName, removeClassName) {
      const el = document.querySelector('html')
      if (addClassName === 'resetFont') {
        el.classList.remove(...removeClassName) //remove multiple classes of array
      } else {
        el.classList.add(addClassName)
        el.classList.remove(removeClassName)
      }
    },
    reset() {
      const el = document.querySelector('html')
      el.style.fontSize = this.font.defaultSize + 'px'
    },
    open() {
      window.open('https://google.com', '_blank')
    },
    htmlFont() {
      const s = document.querySelector('html')
      if (s.style.fontSize != '') {
        // return document.querySelector('html').style.fontSize
        return s.style.fontSize
      } else {
        return window.getComputedStyle(s, null).getPropertyValue('font-size')
      }
    }
  },
  computed: {
    htmlFontSize() {
      const s = document.querySelector('html')
      return window.getComputedStyle(s, null).getPropertyValue('font-size')
      // return {
      //   fontSize: window.getComputedStyle(s, null).getPropertyValue('font-size')
      // }
      // console.log(window.getComputedStyle(s, null).getPropertyValue('font-size'))
      // if (document.querySelector('html').style.fontSize != '') {
      //   // return document.querySelector('html').style.getPropertyValue('fontSize')
      //   return document.querySelector('html').style.fontSize
      // } else {
      //   return this.font.defaultSize
      // }
    }
    // reset() {
    //   return {
    //     'dotted': this.panda !== 'Kung Fu',
    //     'red-border': this.panda === 'Kung Fu'
    //   }
    // }
  },
  created() {},
  mounted() {
    // this.toggleBodyClass("addClass", "mb-0");
  },
  destroyed() {
    // this.toggleBodyClass("removeClass", "mb-0");
  }
}
</script>

<style lang="scss">
//Vuetify variables Usage in components
// @import '~vuetify/src/styles/styles.sass';
// .custom-class {
//   border-radius: $border-radius-root;
// }
// @media #{map-get($display-breakpoints, 'md-and-down')}{
//   .custom-class {
//     display: none
//   }
// }
</style>

<style lang="scss" module>
//Guide: https://vue-loader.vuejs.org/guide/css-modules.html#css-modules
</style>

<style lang="scss" scoped>
// .a /deep/ .b {} //Deep Selectors Guide: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
</style>
