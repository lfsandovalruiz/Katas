import { createStore } from 'vuex'

export default createStore({
  state: {
    pedidos: [],
    insumos: {
      sabores: {
        Chocolate: 10,
        Vainilla: 10,
        Fresa: 10
      },
      adornos: {
        Globos: 10,
        Letreros: 10,
        Rosas: 10,
        Esculturas: 10
      }
    }
  },
  getters: {
  },
  mutations: {
    agregarPedido(state, pedido) {
      state.pedidos.push(pedido);
    },
    calcularInsumos(state, pedido) {
      pedido.pastel.sabores.forEach(sabor => {
        if (sabor === "Chocolate") state.insumos.sabores.Chocolate -= 1;
        if (sabor === "Vainilla") state.insumos.sabores.Vainilla -= 1;
        if (sabor === "Fresa") state.insumos.sabores.Fresa -= 1;
      });
      pedido.pastel.adornos.forEach(adorno => {
        if (adorno === "Globos") state.insumos.adornos.Globos -= 1;
        if (adorno === "Letrero") state.insumos.adornos.Letreros -= 1;
        if (adorno === "Rosas") state.insumos.adornos.Rosas -= 1;
        if (adorno === "Escultura") state.insumos.adornos.Esculturas -= 1;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
