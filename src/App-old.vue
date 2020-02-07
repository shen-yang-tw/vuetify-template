<template>
  <v-app :style="{ fontSize: val.fontSize + 'em' }">
  <!-- <v-app v-on:enlarge-text="onEnlargeText"> -->
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest">
        <span class="mr-2">Latest Release</span>
      </v-btn>-->
      <!-- <v-btn @click="$emit('enlarge-text')"> -->
      <v-btn @click="$emit('enlarge-text', 1)">
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn @click="val.fontSize += 1">
        <span class="mr-2">Test</span>
      </v-btn>
    </v-app-bar>

    <v-content v-on:enlarge-text="counter($event)">
      <v-sheet min-height="1200">
        <BreadCrumb :breadcrumb="val.items" :divider="val.divider" />
        {{val.fontSize}}
        <!-- {{val.fontSize += $event}} -->
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
      fontSize: 1
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
    onEnlargeText: function (enlargeAmount) {
      this.val.fontSize += enlargeAmount;
    },
    counter(e) {
      this.val.fontSize += e;
    }
  }
};
</script>

<style lang="scss" module>
//Guide: https://vue-loader.vuejs.org/guide/css-modules.html#css-modules

</style>

<style lang="scss" scoped>
// .a /deep/ .b {} //Deep Selectors Guide: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
</style>