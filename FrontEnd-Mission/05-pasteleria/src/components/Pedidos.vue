<template>
  <div class="p-6 pb-12 w-full bg-[#d6edc1] overflow-hidden h-full rounded-lg shadow-xl">
    <h2 class="text-center mb-2 text-[#52574F] font-semibold">Pedidos</h2>
    <div class="p-4 flex flex-col space-y-4 h-full overflow-y-scroll scrollbar-hide rounded-xl bg-[#9cdfc6] shadow-sm">
      <div class="h-full" :class="{hidden: !vacio}">
        <p>No hay pedidos...</p>
        <img class="mt-10" src="../assets/tristeza-min.png" alt="No hay pedidos">
      </div>
      <TarjetaPedido v-for="(pedido, indice) in pedidos" v-bind:key="indice" :pedido="{pedido}" />
    </div>
  </div>
</template>

<script>
import TarjetaPedido from '../components/TarjetaPedido.vue'
import store from '@/store';
export default {
  name: 'Pedidos',
  components:{
    TarjetaPedido
  },
  data() {
    return {
      pedidos: store.state.pedidos
    }
  },
  computed: {
    vacio() {
      return this.pedidos.length === 0 ? true : false;
    }
  }
}
</script>