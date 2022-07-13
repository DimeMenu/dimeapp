<template>
  <v-navigation-drawer app width="100%" v-model="drawer">
    <v-card tile elevation="0">
      <v-toolbar dark color="" flat>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-arrow-left</v-icon></v-btn
        >
        <v-toolbar-title> Home </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <p>Logo</p>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>