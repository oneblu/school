<template>
  <v-card outlined>
    <v-card-title>Estudiantes</v-card-title>
    <v-card-text>
    <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-card-text>
  </v-card>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null,
    students: [],
    headers: [
      { text: 'Estudiante', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Dirección', value: 'address.street' },
      { text: 'Ciudad', value: 'address.city' }
    ]
  }),
  created () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.students = response.data
      })
  }
}
</script>
