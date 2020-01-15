<template>
  <v-tabs
    v-model="tab"
    :background-color="bgColor"
    :dark="dark"
    :centered="centered"
    :grow="grow"
    :vertical="vertical"
    :right="right"
    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
    :icons-and-text="icons"
		:tabs="tabs"
		:tabNumber="tabNumber"
		:hrefNumber="hrefNumber"
		:contents="contents"
  >
    <v-tabs-slider></v-tabs-slider>

    <!-- <v-tab v-for="(tab,i) in tabs" :key="i" :href="!'tab.href' ? '#tab-${i}' : 'tab.href'"> -->
    <v-tab v-for="(tab,i) in tabs" :key="i" :href="`#tab-${i}`">
      {{ tab.name }}
      <v-icon v-if="icons">{{ tab.icon }}<!-- mdi-phone --></v-icon>
			<v-sheet hidden></v-sheet>
    </v-tab>

		<v-sheet v-if="contents">
			<!-- <v-tab-item v-for="i in tabs" :key="i" v-show="!tab.href | !tab.text" :value="`tab-${i}`"> -->
			<v-tab-item v-for="i in tabs" :key="i" :value="`tab-${i}`">
				<v-card flat tile>
					<v-card-text>{{ tab.text }}</v-card-text>
				</v-card>
			</v-tab-item>
		</v-sheet>
  </v-tabs>
</template>

<script>
export default {
  name: "Tabs",
  props: {
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
		tabNumber: Number,
		hrefNumber: Number,
    contents: Boolean,
    // href: Boolean,
  },
  // data() {
  //   return {
  //     tab: null,
  //     text:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     icons: false,
  //     centered: false,
  //     grow: false,
  //     vertical: false,
  //     prevIcon: false,
  //     nextIcon: false,
  //     right: false,
  //     tabs: 3
  //   };
  // }
};
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