<template>
  <v-app id="app">
    <MenuHome />
    <MenuInfo />
    <AppBar />
    <Container />
    <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MenuHome from "@/components/MenuHome.vue";
import MenuInfo from "@/components/MenuInfo.vue";
import AppBar from "@/components/AppBar.vue";
import Container from "../components/Container.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: { Footer, AppBar, MenuHome, MenuInfo, Container },
  async created() {
    await this.getCliente(this.$route.params.url);
    await this.getCategorias(this.clienteId);
    this.getProductos(this.categoriasIds);
  },
  computed: {
    ...mapGetters(["clienteId", "categoriasIds"]),
  },
  methods: {
    ...mapActions(["getCliente", "getCategorias", "getProductos"]),
  },
};
</script>
