<template>
  <div>
    <v-carousel
      :show-arrows="showArrows"
      :show-arrows-on-hover="showArrowsOnHover"
      :hide-delimiters="hideDelimiters"
      :cycle="cycle"
    >
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" :caption="item.caption">
        <v-sheet color="transparent" height="100%" tile>
          <v-row :class="rowClass" :align="align" :justify="justify">
            <v-sheet :color="color" tile :class="customClass">
              <!-- :class="class" will get error -->
              <h2 :class="captionClass">{{ item.caption }}</h2>
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
    showArrowsOnHover: Boolean,
    hideDelimiters: Boolean,
    cycle: Boolean,
    items: Array,
    color: String,
    rowClass: String,
    align: String,
    justify: String,
    customClass: String,
    captionClass: String,
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