<template>
    <v-app-bar
      prominent
      dark
      shrink-on-scroll
      fade-img-on-scroll
      class="bar"
      app
      src=""
      color="darken-2">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-home</v-icon></v-btn>
        <v-app-bar-title>
        <div class="text-h6">nombre</div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="contact = !contact" icon>
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
      <template v-slot:extension>
        <NavTabs/>
      </template>
    </v-app-bar>
</template>

<script>
import NavTabs from './NavTabs.vue';
export default {
    data: () => ({}),
    components: { NavTabs }
};
</script>