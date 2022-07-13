<template>
  <v-app id="app">
    <MenuHome />
    <MenuInfo />
    <AppBar />
    <v-main>
      <v-container>
       <Products/>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import AppBar from "@/components/AppBar.vue";
import MenuHome from "@/components/MenuHome.vue";
import MenuInfo from "@/components/MenuInfo.vue";
import Products from "@/components/Products.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Footer, AppBar, MenuHome, MenuInfo, Products },
};
</script>
