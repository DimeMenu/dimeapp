<template>
  <v-tabs
    background-color="rgba(0,0,0,0.5)"
    v-model="tab"
    center-active
    dark
    show-arrows
  >
    <v-tab>Menú</v-tab>
    <v-tab>Item One</v-tab>
    <v-tab>Item Two</v-tab>
    <v-tab>Item Three</v-tab>
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    tab: 0,
  }),
};
</script>