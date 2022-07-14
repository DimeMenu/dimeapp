<template>
  <v-main>
    <v-container>
      <v-tabs-items class="pa-1" v-model="$store.state.tab">
        <Categories />
        <Products v-for="p in productos" :catId="p.categoria" :key="p.id" />
      </v-tabs-items>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import Categories from "./Categories.vue";
import Products from "./Products.vue";
export default {
  name: "Contenido",
  data: () => ({
    //
  }),
  components: { Categories, Products },
  computed: {
    ...mapGetters(["productos"]),
  },
};
</script>
