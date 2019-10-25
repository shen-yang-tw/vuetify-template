<template>
  <div class="test">
    <v-alert color="#2A3B4D" dark icon="mdi-firework" dense>
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>
    <v-alert color="purple lighten-3" dark icon="far fa-hand-paper">
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>
    <vk-breadcrumb>
    <!-- <vk-breadcrumb :items="item in items"> -->
      <vk-breadcrumb-item v-for="item in items" :key="item.id" :disabled="item.disabled" :href="item.href">{{ item.text }}</vk-breadcrumb-item>
    </vk-breadcrumb>
    <p :class="{ [$style.blue]: isBlue }"><v-icon>fas fa-lock</v-icon>Am I blue?</p>
    <p :class="[$style['color-red'], $style.bold]">Red and bold</p>
    <p>{{ msg }}</p>
  </div>
</template>

<!-- Linking js & css
<script src="./hello.js"></script>
<style src="./hello.css"></style>
-->
<script>
export default {
  name: "BreadCrumb",
  props: {
    /*
    items: {
      type: Array,
      required: true
    },
    */
    items: Array,
    isBlue: Boolean,
    msg: String
  }
};
</script>

<style lang="scss" module>
.color-red {
  color: red;
}

.blue {
  color: blue;
}

.bold {
  font-weight: bold;
}
</style>