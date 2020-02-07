<template>
  <v-app-bar
    :absolute="absolute"
    :fixed="fixed"
    :dense="dense"
    :app="app"
    :src="src"
    :dark="dark"
    :elevation="elevation"
    :scroll-threshold="scrollThreshold"
    :scroll-target="scrollTarget"
    :color="color"
    :colors="colors"
    :elevate-on-scroll="elevateOnScroll"
    :hide-on-scroll="hideOnScroll"
    :fade-on-scroll="fadeOnScroll"
    :fade-img-on-scroll="fadeImgOnScroll"
    :inverted-scroll="invertedScroll"
    :collapse="collapse"
    :collapse-on-scroll="collapseOnScroll"
    :shrink-on-scroll="shrinkOnScroll"
    :extended="extended"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" :gradient="gradient" :opacity="imgOpacity"></v-img>
    </template>

    <v-app-bar-nav-icon v-if="firstNavIcon" :class="firstNavIconClass"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
    <v-toolbar-items :class="toolbarClass">
      <v-btn :icon="btnIcon" v-for="(btn,i) in btns" :key="i">{{ btn.name }}</v-btn>

      <v-sheet v-if="fixedResizeFont">
        <v-btn icon @click="htmlClass(largeFontClass, smallFontClass)">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <v-btn icon @click="htmlClass('resetFont', resetFont)">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon @click="htmlClass(smallFontClass, largeFontClass)">
          <v-icon>mdi-magnify-minus-outline</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet v-if="fineTuneResizeFont">
        <v-btn icon @click="fontPlus" :disabled="fontSizePx >= maxFontPx">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <v-btn icon @click="reset">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon @click="fontMinus" :disabled="fontSizePx <= minFontPx">
          <v-icon>mdi-magnify-minus-outline</v-icon>
        </v-btn>
      </v-sheet>
      
      <v-sheet v-if="lastBtns">
        <v-btn :icon="btnIcon" v-for="(btn,i) in btns" :key="i">
          {{ btn.name }}
          <v-icon v-if="btnIcon">
            {{ btn.icon }}
            <!-- mdi-phone -->
          </v-icon>
        </v-btn>
      </v-sheet>
    </v-toolbar-items>

    <template v-slot:extension>
      <!-- <v-tabs centered background-color="transparent">
        <v-tab v-for="n in 8" :key="n">Tab {{n}}</v-tab>
      </v-tabs> -->
      <Tabs :tabs="tabs.tab" :icons="tabs.icons" :centered="tabs.centered" :bgColor="tabs.bgColor" />
    </template>
  </v-app-bar>
</template>

<script>
import Tabs from '@/components/Tabs.vue'

export default {
  name: "AppBars",
  components: {
    // BreadCrumb: () => import("@/components/BreadCrumb.vue")
    Tabs
  },
  props: {
    absolute: Boolean,
    fixed: Boolean,
    dense: Boolean,
    app: Boolean,
    dark: Boolean,
    scrollTarget: Boolean,
    elevateOnScroll: Boolean,
    hideOnScroll: Boolean,
    fadeOnScroll: Boolean,
    fadeImgOnScroll: Boolean,
    invertedScroll: Boolean,
    collapse: Boolean,
    collapseOnScroll: Boolean,
    shrinkOnScroll: Boolean,
    extended: Boolean,
    src: String,
    scrollThreshold: String,
    gradient: String,
    imgOpacity: String,
    elevation: String,
    color: String,
    colors: Array,
    title: String,
    btnIcon: Boolean,
    firstNavIcon: Boolean,
    firstNavIconClass: String,
    toolbarClass: String,
    fixedResizeFont: Boolean,
    fineTuneResizeFont: Boolean,
    fontSizePx: String,
    maxFontPx: String,
    minFontPx: String,
    resetFont: [this.smallFontClass, this.largeFontClass],
    smallFontClass: String,
    largeFontClass: String,

  },
  methods: {
    fontPlus() {
      const el = document.querySelector("html")
      var font = this.fontSizePx += 1
      if (font >= this.maxFontPx) return //stops and returns a value
      el.style.fontSize = font + "px"
    },
    fontMinus() {
      const el = document.querySelector("html")
      var font = this.fontSizePx -= 1
      if (font <= this.minFontPx) return
      el.style.fontSize = font + "px"
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
      this.fontSizePx = 16
      el.style.fontSize = this.fontSizePx + "px"
    },
  },
};
</script>

<style lang="scss">
</style>