<template>
  <div class="p-6 w-full bg-[#d6edc1]">
    <h2 class="text-center mb-2 text-[#52574F] font-semibold">Adornos</h2>
    <div class="flex flex-col h-full">
      <p class="text-xl my-1"><span class="font-semibold">Globos:</span>{{ globos}} pzs</p>
      <p class="text-xl my-1"><span class="font-semibold">Letreros:</span>{{ letreros }} pzs</p>
      <p class="text-xl my-1"><span class="font-semibold">Rosas:</span>{{ rosas }} pzs</p>
      <p class="text-xl my-1"><span class="font-semibold">Esculturas:</span>{{ esculturas }} pzs</p>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Adornos',
  data() {
    return {
      globos: store.state.insumos.adornos.Globos,
      letreros: store.state.insumos.adornos.Letreros,
      rosas: store.state.insumos.adornos.Rosas,
      esculturas: store.state.insumos.adornos.Esculturas,
    }
  }
}
</script>