<template>
  <div class="bg-[#ecf2f2] rounded-lg shadow-lg p-2">
    <p><span class="font-semibold">Cliente: </span>{{cliente.nombre}}</p>
    <p><span class="font-semibold">Teléfono: </span>{{cliente.telefono}}</p>
    <p><span class="font-semibold">Correo: </span>{{cliente.correo}}</p>
    <p><span class="font-semibold">Sabores: </span>{{obtenerSabores}}</p>
    <p><span class="font-semibold">Adornos: </span>{{obtenerAdornos}}</p>
    <p><span class="font-semibold">Descripción: </span>{{pastel.descripcion}}</p>
  </div>
</template>

<script>
export default {
  name: 'TarjetaPedido',
  props:{
    pedido: {
      type: Object,
      required: true
    }
  },
  computed: {
    obtenerSabores() {
      return `${[...this.sabores]}`;
    },
    obtenerAdornos() {
      return `${[...this.adornos]}`;
    }
  },
  data() {
    return {
      cliente: this.pedido.pedido.cliente,
      pastel: this.pedido.pedido.pastel,
      sabores: this.pedido.pedido.pastel.sabores,
      adornos: this.pedido.pedido.pastel.adornos
    }
  }
}
</script>