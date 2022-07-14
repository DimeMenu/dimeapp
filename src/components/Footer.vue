<template>
  <v-footer :color="color" dark fixed app>
    <v-bottom-sheet v-model="$store.state.openPedido">
      <v-card dense tile>
        <v-toolbar dark :color="color + ' darken-3'">
          <v-toolbar-items>
            <v-icon left>mdi-basket-outline</v-icon>
          </v-toolbar-items>
          <v-toolbar-title>Pedido</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn fab x-small @click="openPedido(true)">
            <v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col>
              <div class="text-center pt-5" v-if="pedidos.length === 0">
                <v-icon class="display-2 mt-5">mdi-basket-off-outline</v-icon>
                <p>Pedido Vacio</p>
              </div>
              <v-virtual-scroll
                class="blue-grey lighten-5 mt-2 rounded"
                item-height="80"
                max-height="450"
                :items="pedidos"
                :height="pedidos.length * 85"
              >
                <template v-slot:default="{ index, item }">
                  <v-list-item :key="index">
                    <v-list-item-content>
                      <v-list-item-title class="title">{{
                        item.nombre
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="subtitle-1">{{
                        item.descripcion
                      }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="title text-right"
                        >${{ item.valor | pesos }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-btn @click="deletePedido(index)" fab x-small color="error">
                        <v-icon v-if="item.cant == 1"
                          >mdi-delete-outline</v-icon
                        >
                        <v-icon v-else>mdi-minus</v-icon>
                      </v-btn>
                      <span class="my-2 mx-4">{{ item.cant }}</span>
                      <v-btn @click="sumar(index)" fab x-small color="primary">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-list-item-icon>
                  </v-list-item>
                </template>
              </v-virtual-scroll>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <p v-if="mesa !== null" class="text-center pa-2 ma-2">
                <v-icon left>mdi-table</v-icon> Mesa: {{ mesa }}
                <v-btn x-small fab @click="setMesa(null)" class="mx-2">
                  <v-icon>mdi-recycle-variant</v-icon></v-btn
                >
              </p>
              <v-select
                v-else
                class="px-10"
                label="Mesa:"
                @change="setMesa"
                :items="mesas"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn class="success" @click="sendPedido()" :disabled="disable">
                Enviar Pedido <v-icon right>mdi-send</v-icon></v-btn
              >
              <p>
                Pedido enviado a través de: <br />
                <v-icon class="green--text">mdi-chat</v-icon>
                <span class="green--text">WhatsApp</span>
              </p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="darken-3 px-4 py-1 mx-0">
          <v-row>
            <v-col>
              <v-btn dark class="ma-1" @click="openPedido(false)">
                <v-icon left>mdi-basket-outline</v-icon>
                <transition name="slide-fade" mode="out-in">
                  <span :key="total"> Mi Pedido</span>
                </transition>
              </v-btn>
            </v-col>
            <v-col>
              <div class="pa-1 rounded text-center">
                <span class="pr-2 white--text">Total:</span>
                <v-btn dark @click="openPedido(false)">
                  <transition name="slide-fade" mode="out-in">
                    <span :key="total">$ {{ total | pesos }}</span>
                  </transition>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-btn @click="openPedido(true)">Ver Pedido</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="openPedido(true)">$ 0</v-btn>
  </v-footer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Footer",

  data: () => ({
    mesa: null,
    total: 0,
    mesas: [],

  }),

  filters: {
    pesos(v) {
      return v;
    },
  },
  computed: {
    ...mapGetters(["color", "pedidos"]),
    disable() {
      return false;
    },
  },
  methods: {
    ...mapMutations(["openPedido"]),
    setMesa() {},
  },
};
</script>
