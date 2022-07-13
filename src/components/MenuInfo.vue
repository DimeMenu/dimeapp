<template>
    <v-navigation-drawer
      right width="100%"
      app v-model="contact">
        <v-card tile elevation="0">
            <v-toolbar dark color="" flat>
                <v-btn icon @click="contact = !contact">
                    <v-icon>mdi-arrow-right</v-icon></v-btn>
                <v-toolbar-title>
                    Contácto
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon @click="contact = !contact">
                    <v-icon>mdi-close</v-icon>
                </v-btn>

            </v-toolbar>
            <v-card-text>
                <p>Info de contacto, redes y formulario para envio de mensajes</p>
                
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    contact: null,
  }),
};
</script>