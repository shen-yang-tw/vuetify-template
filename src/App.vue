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
        <!-- <v-btn icon @click="plus" :disabled="val.fontSize >= val.max"> -->
        <v-btn icon @click="htmlClass(val.largeFont, val.smallFont)">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="minus" :disabled="!val.min ? 'true': undefined"> -->
        <!-- <v-btn icon @click="minus" :disabled="val.fontSize <= val.min"> -->
        <v-btn icon @click="htmlClass('resetFont', val.resetFont)">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon @click="htmlClass(val.smallFont, val.largeFont)">
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
    <!-- <v-sheet id="scrolling-techniques-5" class="overflow-y-auto" max-height="600">
      <v-container>
        <v-content v-on:enlarge-text="counter($event)">
          <v-sheet min-height="1200">
            <BreadCrumb :breadcrumb="val.items" :divider="val.divider" />
            {{val.fontSize}}
          </v-sheet>
        </v-content>
      </v-container>
    </v-sheet>-->

    <v-content>
      <v-sheet min-height="1200">
        <v-container>
          <BreadCrumb :breadcrumb="val.items" :divider="val.divider" />
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
export default {
  name: "App",
  components: {
    BreadCrumb: () => import("@/components/BreadCrumb.vue")
  },
  data: () => ({
    val: {
      items: [
        { disabled: false, href: "breadcrumbs_dashboard", text: "Link1" },
        { disabled: true, href: "breadcrumbs_dashboard", text: "Link2" }
      ],
      divider: ">",
      fontSize: 1,
      min: .5,
      max: 5,
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
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.show = top > 20; //The goto button shows when scroll to bottom more than 20px
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    plus() {
      //Stop when the value is 0.8
      if (this.val.fontSize >= this.val.max) return
      this.val.fontSize += .5
    },
    minus() {
      //Stop when the value is 0.8
      if (this.val.fontSize <= this.val.min) return
      this.val.fontSize -= .5
    },
    htmlClass(addClassName, removeClassName) {
      const el = document.querySelector("html");
      if (addClassName === "resetFont") {
        el.classList.remove(...removeClassName);
      } else {
        el.classList.add(addClassName);
        el.classList.remove(removeClassName);
      }
    },
  },
  computed: {
    reset() {
      return {
        'dotted': this.panda !== 'Kung Fu',
        'red-border': this.panda === 'Kung Fu'
      }
    }
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