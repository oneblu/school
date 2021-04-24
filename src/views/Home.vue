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

    <v-btn @click="increment">Count</v-btn>
    <v-alert type="info">
      {{ $store.state.count }}
    </v-alert>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations } from 'vuex'
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
  },
  methods: {
    ...mapMutations([
      'increment'
    ])
  }
}
</script>
