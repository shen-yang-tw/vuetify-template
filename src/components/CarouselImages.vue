<template>
  <div>
    <v-carousel
      :show-arrows="showArrows"
      :hide-delimiters="hideDelimiters"
      :cycle="cycle"
    >
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" :caption="item.caption">
        <v-sheet color="transparent" height="100%" tile>
          <v-row class="fill-height" :align="align" :justify="justify">
            <v-sheet :color="color" tile :class="customClass">
              <!-- :class="class" will get error -->
              <div class="display-3">{{ item.caption }}{{ i + 1 }}</div>
            </v-sheet>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselImages",
  props: {
    showArrows: Boolean,
    hideDelimiters: Boolean,
    cycle: Boolean,
    items: Array,
    color: String,
    align: String,
    justify: String,
    customClass: String,
  },
  // data() {
  //   return {
  //     colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  //     model: 0,
  //     showArrows: true,
  //     hideDelimiters: false,
  //     cycle: false
  //   };
  // }
};
</script>