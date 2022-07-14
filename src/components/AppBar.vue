<template>
  <v-app-bar
    prominent
    dark
    shrink-on-scroll
    fade-img-on-scroll
    class="bar"
    app
    :src="foto"
    :color="color + ' darken-2'"
  >
    <v-btn @click="setMenuHome(true)" icon> <v-icon>mdi-home</v-icon></v-btn>
    <v-app-bar-title>
      <div class="text-h6">{{ nombre }}</div>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="setMenuInfo(true)" icon>
      <v-icon>mdi-message-text</v-icon>
    </v-btn>
    <template v-slot:extension>
      <NavTabs />
    </template>
  </v-app-bar>
</template>

<script>
import NavTabs from "./NavTabs.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({}),
  components: { NavTabs },
  computed: {
    ...mapGetters(["color", "foto", "nombre"]),
  },
  methods: {
    ...mapMutations(["setMenuHome", "setMenuInfo"]),
  },
};
</script>
