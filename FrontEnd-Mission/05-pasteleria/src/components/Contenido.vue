<template>
  <main class="flex bg-amber-50">

      <!-- Imagen principal -->
      <div>
        <img src="../assets/principal.jpg" alt="">
      </div>
      
      <FormularioPedidos />

    </main>
</template>

<script>

import FormularioPedidos from './FormularioPedidos.vue';

export default {
  name: 'Contenido',
  components: {
    FormularioPedidos
  }
}
</script>