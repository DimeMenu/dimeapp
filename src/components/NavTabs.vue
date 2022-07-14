<template>
  <v-tabs
    background-color="rgba(0,0,0,0.5)"
    v-model="$store.state.tab"
    center-active
    dark
    show-arrows
  >
    <v-tab>Menú</v-tab>
    <v-tab v-for="(cat, i) in categorias" :key="i">{{ cat.nombre }}</v-tab>
  </v-tabs>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["categorias"]),
  },
};
</script>
