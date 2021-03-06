<template>
  <!-- v-model cannot be binded as attribute as ":v-model" or it will be not working -->
  <v-tabs
    v-model="model"
    :background-color="bgColor"
    :dark="dark"
    :centered="centered"
    :grow="grow"
    :vertical="vertical"
    :right="right"
    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
    :icons-and-text="icons"
    :contents="contents"
  >
    <v-tabs-slider></v-tabs-slider>

    <!-- If only "tab" is used, the "id" value must be set in the "tab" of data value -->
    <!-- :tabs="tabs" cannot be set on any <tag> or it will show errors on <v-tabs>, but it needs to set the props type -->
    <!-- <v-tab v-for="(tab,i) in tabs" :key="i" :icon="tab.icon" :name="tab.name" :href="'#tab' + i + (!tab.href ? tab.href : '-' + tab.href)"> -->
    <v-tab
      v-for="(tab, i) in tabs"
      :key="i"
      :href="tab.disabled ? tab.href : '#tab-' + i"
      :target="tab.target"
    >
      {{ tab.name }}
      <v-icon v-if="icons">
        {{ tab.icon }}
        <!-- mdi-phone -->
      </v-icon>
    </v-tab>

    <!-- v-if="more.length": If Array.length is not empty (ES5+) -->
    <!-- <v-menu v-if="more.length" bottom left>
      <template v-slot:activator="{ on }">
        <v-btn text class="align-self-center mr-4" v-on="on">
          more
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list class="grey lighten-3">
        <v-list-item v-for="item in more" :key="item" @click="addItem(item)">{{ item }}</v-list-item>
      </v-list>
    </v-menu>-->

    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="(tab, i) in tabs"
        :key="i"
        :value="tab.disabled ? '' : 'tab-' + i"
        :transition="transition"
        :reverse-transition="reverseTransition"
      >
        <v-card v-if="contents" flat tile>
          <v-card-text>
            <h2>{{ tab.name }}</h2>
            {{ tab.text }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    model: String,
    icons: Boolean,
    centered: Boolean,
    grow: Boolean,
    vertical: Boolean,
    prevIcon: Boolean,
    nextIcon: Boolean,
    right: Boolean,
    text: String,
    bgColor: String,
    dark: String,
    tabs: Array,
    contents: Boolean,
    transition: Boolean,
    reverseTransition: Boolean
  }
}
</script>

<style lang="scss">
// $tab-disabled-opacity:.5 !default;
// $tab-font-size:map-deep-get($headings, 'subtitle-2', 'size') !default;
// $tab-font-weight:map-deep-get($headings, 'subtitle-2', 'weight') !default;
// $tab-line-height:normal !default;
// $tabs-bar-background-color:'cards' !default;
// $tabs-bar-height:48px !default;
// $tabs-icons-and-text-bar-height:72px !default;
// $tabs-icons-and-text-first-tab-margin-bottom:6px !default;
// $tabs-item-align-with-title-margin:42px !default;
// $tabs-item-focus-opacity:0.20 !default;
// $tabs-item-hover-opacity:0.16 !default;
// $tabs-item-letter-spacing:.0892857143em !default;
// $tabs-item-max-width:360px !default;
// $tabs-item-min-width:90px !default;
// $tabs-item-padding:0 16px !default;
// $tabs-item-vertical-height:$tabs-bar-height !default;
// $tabs-item-vertical-icons-and-text-height:$tabs-icons-and-text-bar-height !default;
</style>
