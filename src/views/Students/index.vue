<template>
  <v-card
    outlined
    :loading="loading"
  >
    <v-card-title>Estudiantes</v-card-title>
    <v-card-text>
    <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.actions`]="{ item }">
    <v-btn
    :to="{ name: 'Parents', params: { id: item.id } }">
    Acudientes
      <v-icon
        small
        class="mr-2"
      >
        mdi-account-supervisor-circle
      </v-icon>
      </v-btn>
    </template>
  </v-data-table>
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
      { text: 'Ciudad', value: 'address.city' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    loading: false
  }),
  created () {
    this.loading = true
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.students = response.data
        this.loading = false
      })
  },
  methods: {
  }
}
</script>
