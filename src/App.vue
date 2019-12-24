<template>
  <v-app :style="{ fontSize: val.fontSize.toFixed(1) + 'em' }">
    <!-- <v-app v-on:enlarge-text="onEnlargeText"> -->
    <!-- <vk-card>Stick 100px below the top</vk-card> -->
    <v-app-bar app color="#43a047" dark src="https://picsum.photos/1920/1080?random" fade-img-on-scroll scroll-threshold="500" fixed dense>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)" opacity=".5"></v-img>
      </template>

      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Link One</v-btn>
        <v-btn text>Link Two</v-btn>
        <v-btn text>Link Three</v-btn>
        <!-- <v-btn icon @click="htmlClass(val.largeFont, val.smallFont)"> -->
        <!-- <v-btn icon @click="plus" :disabled="val.fontSize >= val.max"> -->
        <v-btn icon @click="fontPlus" :disabled="val.fontSizePx >= val.maxFont">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="htmlClass('resetFont', val.resetFont)"> -->
        <v-btn icon @click="reset">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="htmlClass(val.smallFont, val.largeFont)"> -->
        <!-- <v-btn icon @click="minus" :disabled="!val.min ? 'true': undefined"> -->
        <!-- <v-btn icon @click="minus" :disabled="val.fontSize <= val.min"> -->
        <v-btn icon @click="fontMinus" :disabled="val.fontSizePx <= val.minFont">
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
        <v-tabs centered background-color="transparent">
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <CarouselImages :showArrows="val.carouselArrows" :cycle="val.carouselCycle" :items="val.slides" :align="val.carouselAlign" :justify="val.carouselJustify" :color="val.carouselCaptionBg"/>

    <v-content>
      <v-sheet min-height="1200">
        <v-container>
          <BreadCrumb :breadcrumb="val.breadcrumbLinks" :divider="val.breadcrumbDivider" />
          {{val.fontSize.toFixed(1)}}
          {{val.resetFont}}
        </v-container>
      </v-sheet>
    </v-content>

    <v-btn v-scroll="onScroll" v-show="show" fab fixed bottom right color="primary" @click="toTop">
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

export default {
  name: "App",
  components: {
    // BreadCrumb: () => import("@/components/BreadCrumb.vue")
    BreadCrumb, CarouselImages
  },
  data: () => ({
    val: {
      breadcrumbLinks: [
        { disabled: false, href: "breadcrumbs_dashboard", text: "Link1" },
        { disabled: true, href: "breadcrumbs_dashboard", text: "Link2" }
      ],
      breadcrumbDivider: ">",
      slides: [
        {
          src: 'https://picsum.photos/id/200/1920/600', caption: 'Slide'
        },
        {
          src: 'https://picsum.photos/id/310/1920/600', caption: 'Slide'
        },
        {
          src: 'https://picsum.photos/id/400/1920/600', caption: 'Slide'
        },
      ],
      carouselArrows: true,
      carouselCycle: true,
      carouselAlign: "end",
      carouselJustify: "center",
      carouselCaptionBg: "rgba(255, 0, 0, 0.5)",
      fontSize: 1,
      min: .5,
      max: 5,
      fontSizePx: 16,
      minFont: 12,
      maxFont: 24,
      resetFont: ['smallFont', 'largeFont'],
      smallFont: 'smallFont',
      largeFont: 'largeFont',
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
      color: "accent",
      colors: ["primary", "accent", "warning lighten-2", "teal", "orange"]
    },
    show: false
  }),
  methods: {
    onScroll(e) {
      //e is event
      if (typeof window === "undefined") return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.show = top > 20 //The goto button shows when scroll to bottom more than 20px
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    fontPlus() {
      const el = document.querySelector("html")
      var font = this.val.fontSizePx += 1
      if (font >= this.val.maxFont) return //stops and returns a value
      el.style.fontSize = font + "px"
    },
    fontMinus() {
      const el = document.querySelector("html")
      var font = this.val.fontSizePx -= 1
      if (font <= this.val.minFont) return
      el.style.fontSize = font + "px"
    },
    plus() {
      //Stop when the value is 5
      if (this.val.fontSize >= this.val.max) return
      this.val.fontSize += .5
    },
    minus() {
      //Stop when the value is 0.5
      if (this.val.fontSize <= this.val.min) return
      this.val.fontSize -= .5
    },
    htmlClass(addClassName, removeClassName) {
      const el = document.querySelector("html")
      if (addClassName === "resetFont") {
        el.classList.remove(...removeClassName) //remove multiple classes of array
      } else {
        el.classList.add(addClassName)
        el.classList.remove(removeClassName)
      }
    },
    reset() {
      const el = document.querySelector("html")
      this.val.fontSizePx = 16
      el.style.fontSize = this.val.fontSizePx + "px"
    }
  },
  computed: {
    // reset() {
    //   return {
    //     'dotted': this.panda !== 'Kung Fu',
    //     'red-border': this.panda === 'Kung Fu'
    //   }
    // }
  },
  created() {
  },
  mounted() {
    // this.toggleBodyClass("addClass", "mb-0");
  },
  destroyed() {
    // this.toggleBodyClass("removeClass", "mb-0");
  }
};
</script>

<style lang="scss" module>
//Guide: https://vue-loader.vuejs.org/guide/css-modules.html#css-modules
</style>

<style lang="scss" scoped>
// .a /deep/ .b {} //Deep Selectors Guide: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
</style>