<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      :absolute="absolute"
      :app="app"
      :dark="dark"
      :scroll-target="scrollTarget"
      :color="color"
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
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="playground-example" class="overflow-y-auto" max-height="600">
      <!-- <v-container style="height: 1500px;"></v-container> -->
      <v-container fill-height>
        <v-layout>
            <v-flex>
              <h1 v-for="n in 20" :key="n">{{n}}</h1>
            </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "AppBars",
  props: {
    absolute: Boolean,
    app: Boolean,
    dark: Boolean,
    scrollTarget: Boolean,
    color: String,
    elevateOnScroll: Boolean,
    hideOnScroll: Boolean,
    fadeOnScroll: Boolean,
    fadeImgOnScroll: Boolean,
    invertedScroll: Boolean,
    collapse: Boolean,
    collapseOnScroll: Boolean,
    shrinkOnScroll: Boolean,
    extended: Boolean
  },
  data: () => ({
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
  })
};
</script>

<style lang="scss" module>
</style>