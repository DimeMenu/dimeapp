<template>
  <v-tab-item>
    <v-row>
      <v-col v-for="(cat, i) in categorias" :key="i" cols="12" md="6" lg="4">
        <v-card dense @click="setTab(i + 1)">
          <v-img
            height="200"
            class="white--text align-end shadow--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :src="cat.imagen"
          >
            <v-card-title>
              <h2>{{ cat.nombre }}</h2>
            </v-card-title>
            <v-card-text>
              <p>{{ cat.descripcion }}</p>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-tab-item>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["categorias"]),
  },
  methods: {
    ...mapMutations(["setTab"]),
  },
};
</script>
