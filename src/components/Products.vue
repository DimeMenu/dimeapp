<template>
  <v-tabs-items class="pa-1" v-model="tab">
    <v-tab-item v-for="item in 5" :key="item">
      <v-row>
        <v-col v-for="i in 5" :key="i" cols="12" md="6" lg="4">
          <v-card dense @click="() => {}">
            <v-img
              height="200"
              class="white--text align-end shadow--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              src=""
            >
              <v-card-title>
                <h2>nombre</h2>
              </v-card-title>
              <v-card-text>
                <p>descripcion</p>
              </v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  data: () => ({
    tab: 0,
  }),
};
</script>