<template>
  <div class="bg-[#f48c93] h-full py-4 pt-0 overflow-y-hidden flex flex-col space-y-4">
    <div class="bg-[#ecf2f2]">
      <nav class="text-center ">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
      <div class="">
        <img class="m-auto py-1" src="../assets/nombre.png" alt="Pastelería Doña Florinda">
      </div>
    </div>
    <h2 class="text-center text-xl text-slate-700 font-semibold">Dashboard</h2>
    <div class="px-14 h-full overflow-y-hidden">
      <div class="scrollbar-hide h-full flex flex-col space-y-6 items-center lg:items-start lg:flex-row lg:space-y-0 lg:space-x-6">
        <Pedidos class="max-w-md min-h-[15rem] max-h-[100%]" />
        <Sabores class="max-w-md min-h-[15rem]" />
        <Adornos class="max-w-md min-h-[15rem]" />
      </div>
    </div>
  </div>
</template>

<script>
import Pedidos from '../components/Pedidos.vue'
import Sabores from '../components/Sabores.vue'
import Adornos from '../components/Adornos.vue'
export default {
  name: "Dashboard",
  components: {
    Pedidos,
    Sabores,
    Adornos
  }
}
</script>