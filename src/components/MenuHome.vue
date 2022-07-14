<template>
  <v-navigation-drawer app width="100%" v-model="$store.state.openMenuHome">
    <v-card tile elevation="0">
      <v-toolbar dark :color="color" flat>
        <v-btn icon @click="setMenuHome(false)">
          <v-icon>mdi-arrow-left</v-icon></v-btn
        >
        <v-toolbar-title> Home </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="setMenuHome(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-img :src="logo"></v-img>
        <h2>{{ nombre }}</h2>
        <p>{{ direccion }}</p>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["logo", "nombre", "direccion", "color"]),
  },
  methods: {
    ...mapMutations(["setMenuHome"]),
  },
};
</script>
