<template>
  <div>
    <h1>Asignaturas</h1>
    <v-btn color="primary" @click="addSubject">
    Crear asignatura
  </v-btn>
    <v-data-table
    :headers="headers"
    :items="subjects"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  <form-subject v-model="dialog" :dialog="dialog" @close="dialog = false" @saveSuccess="showMessage"></form-subject>
  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import axios from 'axios'
import FormSubject from '../components/FormSubject.vue'
export default {
  name: 'App',
  components: {
    FormSubject
  },
  data: () => ({
    drawer: null,
    subjects: [],
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Asignatura', value: 'name' }
    ],
    dialog: false,
    snackbar: false,
    message: '',
    timeout: 2000
  }),
  created () {
    axios.get('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects')
      .then((response) => {
        this.subjects = response.data
      })
  },
  methods: {
    addSubject () {
      this.dialog = true
    },
    showMessage (success) {
      if (success) {
        this.dialog = false
        this.snackbar = true
        this.message = 'Asignatura agregada con exito'
      }
    }
  }
}
</script>
