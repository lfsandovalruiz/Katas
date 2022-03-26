<template>
  <form class="py-3 px-2 flex flex-col space-y-4 bg-[#d6edc1] grow">

    <!-- <h2>{{ $store.state.saludar }}</h2> -->

    <!-- Datos del cliente -->
    <div class="flex flex-col space-y-2">

      <h3 class="text-center text-xl">Registre sus datos</h3>

      <div class="flex flex-col space-y-1">
        <label for="nombre">Nombre:</label>
        <input v-model="cliente.nombre" type="text" name="nombre" id="nombre" autocomplete="off" class="border-solid border-blue-900 border-2 rounded-lg p-1">
      </div>

      <div class="flex flex-col space-y-1">
        <label for="telefono">Teléfono:</label>
        <input v-model="cliente.telefono" type="tel" name="telefono" id="telefono" autocomplete="off" class="border-solid border-blue-900 border-2 rounded-lg p-1">
      </div>

      <div class="flex flex-col space-y-1">
        <label for="correo">Correo electrónico:</label>
        <input v-model="cliente.correo" type="email" name="correo" id="correo" autocomplete="off" class="border-solid border-blue-900 border-2 rounded-lg p-1">
      </div>

    </div>

    <!-- Datos del pastel -->
    <div class="grow mt-3 flex flex-col space-y-2">

      <h3 class="text-center text-xl">Diseñe su propio pastel</h3>

      <div class="flex flex-row">

        <!-- sabores -->
        <div class="basis-1/2 flex flex-col space-y-2">

          <h3>Elija los sabores</h3>
          <div>
            <input type="checkbox" value="Chocolate" v-model="pastel.sabores" id="chocolate" name="chocolate" class="bg-fuchsia-300">
            <label for="chocolate">Chocolate</label>
          </div>
          <div>
            <input type="checkbox" value="Vainilla" v-model="pastel.sabores" id="vainilla" name="vainilla">
            <label for="vainilla">Vainilla</label>
          </div>
          <div>
            <input type="checkbox" value="Fresa" v-model="pastel.sabores" id="fresa" name="fresa">
            <label for="fresa">Fresa</label>
          </div>
          
          <!-- <ul>
            <li v-for="(sabor, indice) in pastel.sabores" v-bind:key="indice">{{ sabor }}</li>
          </ul> -->
          
        </div>

        <!-- adornos -->
        <div class="basis-1/2 flex flex-col space-y-2">

          <h3>Elija los adornos</h3>

          <div>
            <input v-model="pastel.adornos" type="checkbox" value="Globos" id="globos" name="globos">
            <label for="globos">Globos $10</label>
          </div>
          <div>
            <input v-model="pastel.adornos" type="checkbox" value="Letrero" id="letrero" name="letrero">
            <label for="letrero">Letrero $12</label>
          </div>
          <div>
            <input v-model="pastel.adornos" type="checkbox" value="Rosas" id="rosas" name="rosas">
            <label for="rosas">Rosas $15</label>
          </div>
          <div>
            <input v-model="pastel.adornos" type="checkbox" value="Escultura" id="escultura" name="escultura">
            <label for="escultura">Escultura con fondant (A partir de $20)</label>
          </div>

          <!-- <ul>
            <li v-for="(adorno, indice) in pastel.adornos" :key="indice">{{ adorno }}</li>
          </ul> -->

        </div>

      </div>

      <div class="grow flex flex-col space-y-1">
        <label for="descripcion">Descripción general del pastel:</label>
        <textarea v-model="pastel.descripcion" name="descripcion" id="descripcion" class="h-full resize-none border-solid border-blue-900 border-2 rounded-lg p-2"></textarea>
      </div>

    </div>

    <!-- botones -->
    <div class="flex justify-end">
      <button @click="hacerPedido" type="button" class="px-2 py-1 rounded-full bg-sky-300 border-2 border-green-900">Pedir Pastel</button>
    </div>

  </form>
</template>

<script>
import store from '@/store';
export default {
  name: 'FormularioPedidos',
  data() {
    return {
      cliente: {
        nombre: "",
        telefono: "",
        correo: ""
      },
      pastel: {
        descripcion: "",
        sabores: [],
        adornos: []
      }
    }
  },
  methods: {
    hacerPedido() {
      const data = {
        cliente: {
          nombre: this.cliente.nombre,
          telefono: this.cliente.telefono,
          correo: this.cliente.correo
        },
        pastel: {
          descripcion: this.pastel.descripcion,
          sabores: [...this.pastel.sabores],
          adornos: [...this.pastel.adornos]
        }
      }
      store.commit('agregarPedido', data);
      store.commit('calcularInsumos', data);
    }
  }
}
</script>