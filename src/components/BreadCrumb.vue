<template>
    <v-breadcrumbs :items="breadcrumb" :divider="divider"></v-breadcrumbs>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    breadcrumb: Array,
    divider: String
  }
};
</script>

<style lang="scss" module>
</style>