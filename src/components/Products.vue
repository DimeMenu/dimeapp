<template>
  <v-tab-item>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(item, j) in items" :key="j">
        <v-card @click="addPedido(item)" :color="color + ' lighten-5'">
          <v-img
            v-if="item.imagen"
            width="120"
            height="100"
            class="rounded float-left mr-2"
            :src="item.imagen"
          ></v-img>
          <v-card-text>
            <div class="text-h5">
              {{ item.nombre }}
            </div>
            {{ item.descripcion }}
          </v-card-text>
          <v-card-actions>
            <v-chip small :color="color + ' lighten-3'"
              >Añadir al pedido</v-chip
            >
            <v-spacer></v-spacer>
            <v-icon color="indigo" left>mdi-basket-fill</v-icon> ${{
              item.valor | pesos
            }}
          </v-card-actions>
          <div style="clear: both"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-tab-item>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["catId"],
  data: () => ({}),
  computed: {
    ...mapGetters(["productos", "color"]),
    items() {
      return this.productos.filter((p) => p.categoria == this.catId);
    },
  },
  methods: {
    ...mapMutations(["addPedido"]),
  },
  filters: {
    pesos(v) {
      let _val = "";
      _val = v
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      _val = _val.split("").reverse().join("").replace(/^[.]/, "");
      return _val;
    },
  },
};
</script>
