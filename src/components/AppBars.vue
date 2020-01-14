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
      <v-img v-bind="props" :gradient="gradient" :opacity="opacity"></v-img>
    </template>

    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBars",
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
    opacity: String,
    elevation: String,
    color: String,
    colors: Array
  },
  // data: () => ({
  //   elevateOnScroll: false,
  //   hideOnScroll: false,
  //   fadeOnScroll: false,
  //   fadeImgOnScroll: false,
  //   invertedScroll: false,
  //   collapse: false,
  //   collapseOnScroll: false,
  //   shrinkOnScroll: false,
  //   extended: false,
  //   gradient: "to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)",
  //   color: "accent",
  //   colors: ["primary", "accent", "warning lighten-2", "teal", "orange"]
  // })
};
</script>

<style lang="scss" module>
</style>