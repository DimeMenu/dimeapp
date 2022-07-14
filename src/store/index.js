import Vue from "vue";
import Vuex from "vuex";
import "./firebase";
import {
  getFirestore,
  getDocs,
  where,
  collection,
  query,
} from "firebase/firestore";

const db = getFirestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openMenuHome: false,
    openMenuInfo: false,
    tab: 0,
    cliente: {},
    categorias: [],
    productos: [],
    openPedido: false,
    pedidos: [],
  },

  mutations: {
    setMenuHome(state, value) {
      state.openMenuHome = value;
    },
    setMenuInfo(state, value) {
      state.openMenuInfo = value;
    },
    setCliente(state, cliente) {
      state.cliente = cliente;
    },
    setCategorias(state, categorias) {
      state.categorias = categorias;
    },
    setProductos(state, productos) {
      state.productos = productos;
    },
    setTab(state, tab) {
      state.tab = tab;
    },

    openPedido(state) {
      state.openPedido = !state.openPedido;
    },
    addPedido(state, item) {
      state.pedidos.push(item);
    },
  },

  actions: {
    async getCliente({ commit }, url) {
      const clientesRef = collection(db, "clientes");
      const clientesQuery = query(clientesRef, where("url", "==", url));
      const getCliente = await getDocs(clientesQuery);
      const cliente = !getCliente.empty ? getCliente.docs[0].data() : {};
      commit("setCliente", cliente);
    },

    async getCategorias({ commit }, clienteId) {
      const categoriasRef = collection(db, "categorias");
      const categoriasQuery = query(
        categoriasRef,
        where("cliente", "==", clienteId)
      );
      const getCategorias = await getDocs(categoriasQuery);
      const categorias = [];
      getCategorias.forEach((doc) => categorias.push(doc.data()));
      commit("setCategorias", categorias);
    },

    async getProductos({ commit }, categorias) {
      const productosRef = collection(db, "productos");
      const productosQuery = query(
        productosRef,
        where("categoria", "in", categorias)
      );
      const getProductos = await getDocs(productosQuery);
      const productos = [];
      getProductos.forEach((doc) => productos.push(doc.data()));
      commit("setProductos", productos);
    },
  },

  getters: {
    color: (state) => state.cliente.color,
    foto: (state) => state.cliente.foto,
    logo: (state) => state.cliente.logo,
    nombre: (state) => state.cliente.nombre,
    direccion: (state) => state.cliente.direccion,
    horario: (state) => state.cliente.horario,
    clienteId: (state) => state.cliente.id,

    categorias: (state) => state.categorias,
    categoriasIds: (state) => state.categorias.map((cat) => cat.id),

    productos: (state) => state.productos,
    
    pedidos: (state) => state.pedidos,
  },
});
