<template>
  <v-navigation-drawer
    right
    width="100%"
    app
    v-model="$store.state.openMenuInfo"
  >
    <v-card tile elevation="0">
      <v-toolbar dark :color="color" flat>
        <v-btn icon @click="setMenuInfo(false)">
          <v-icon>mdi-arrow-right</v-icon></v-btn
        >
        <v-toolbar-title> Contácto </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="setMenuInfo(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <p>Info de contacto, redes y formulario para envio de mensajes</p>
        <p>{{ horario }}</p>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["horario", "color"]),
  },
  methods: {
    ...mapMutations(["setMenuInfo"]),
  },
};
</script>
