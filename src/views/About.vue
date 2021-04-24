<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-alert type="info">
      {{ hola }} {{ count }}
    </v-alert>
    <v-alert type="warning">
      {{ saludo }}
    </v-alert>

    <v-alert type="warning">
      Tareas terminadas: {{ doneTodosCount }}
    </v-alert>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    saludo () {
      return this.hola + ' de Carlos'
    },
    ...mapGetters(['doneTodos', 'doneTodosCount'])
  },
  data: () => ({
    localCount: 10
  })
}
</script>
