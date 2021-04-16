<template>
  <v-card outlined
  :loading="loading">
    <v-card-title>Asignaturas</v-card-title>
    <v-card-text>
    <v-data-table
    :headers="headers"
    :items="subjects"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.actions`]="{ item }">
    <v-btn @click="editSubject(item)">
    Editar
      <v-icon
        small
        class="mr-2"
      >
        mdi-edit
      </v-icon>
      </v-btn>
    </template>
  </v-data-table>
  </v-card-text>
  <form-subject v-model="dialog" :mode="mode" :subject="subject" :dialog="dialog" @close="dialog = false" @saveSuccess="showMessage"></form-subject>
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
          <v-btn
        bottom
        color="pink"
        dark
        fab
        fixed
        right
        @click="addSubject"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-card>
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
    subject: {
      name: ''
    },
    loading: false,
    subjects: [],
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Asignatura', value: 'name' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    dialog: false,
    snackbar: false,
    message: '',
    timeout: 2000,
    mode: ''
  }),
  created () {
    this.getSubjects()
  },
  methods: {
    addSubject () {
      this.mode = 'create'
      this.dialog = true
      this.subject = { id: '', name: '' }
    },
    showMessage (success) {
      if (success) {
        this.dialog = false
        this.snackbar = true
        this.message = 'Asignatura guardada con exito'
      }
    },
    editSubject (subject) {
      this.mode = 'edit'
      this.subject = subject
      this.dialog = true
      //
    },
    getSubjects () {
      this.loading = true
      axios.get('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects')
        .then((response) => {
          this.subjects = response.data
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
