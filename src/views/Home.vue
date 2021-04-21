<template>
  <div class="home">
    <HelloWorld msg="Mensaje" :contacto="contact">
      HOLA MUNDO

  <template #header="{contacto}">
    {{contacto.name}}
  </template>

    <template #footer>
      Here's some contact info
    </template>

    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // TODO: Hola mundo
  name: 'Home',
  data () {
    return {
      contact: {
        name: 'Pepito Perez',
        telefono: '65456464'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>
