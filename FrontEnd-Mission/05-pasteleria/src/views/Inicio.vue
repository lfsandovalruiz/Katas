<template>
  <Header />
  <Navegacion />
  <Contenido />
</template>

<script>

import Header from '@/components/Header.vue'
import Navegacion from '@/components/Navegacion.vue'
import Contenido from '@/components/Contenido.vue'

export default {
  name: "Inicio",
  components: {
    Header,
    Navegacion,
    Contenido
  }

}

</script>