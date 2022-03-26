<template>
  <div class="p-6 w-full bg-[#d6edc1] rounded-lg shadow-xl">
    <h2 class="text-center mb-2 text-[#52574F] font-semibold">Sabores</h2>
    <div class="flex flex-col h-full">
      <p class="text-xl my-1"><span class="font-semibold">Chocolate:</span>{{ chocolate}} pzs</p>
      <p class="text-xl my-1"><span class="font-semibold">Vainilla:</span>{{ vainilla }} pzs</p>
      <p class="text-xl my-1"><span class="font-semibold">Fresa:</span>{{ fresa }} pzs</p>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Sabores',
  data() {
    return {
      chocolate: store.state.insumos.sabores.Chocolate,
      vainilla: store.state.insumos.sabores.Vainilla,
      fresa: store.state.insumos.sabores.Fresa,
    }
  }
}
</script>