<template>
  <v-card outlined
  :loading="loading">
    <v-card-title>Estudiantes</v-card-title>
    <v-card-text>
    <v-row align="center">

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="subjects"
          label="Asignatura"
          item-text="name"
          item-value="id"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.grade`]="{ item }">
    <v-row class="mt-1">
      <v-col>
        <v-text-field
      outlined
      dense
      label="Nota 30%"
      v-model.number="item.grade1"
      >
      </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
      outlined
      dense
      label="Nota 30%"
      v-model.number="item.grade2"
      >
      </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
      outlined
      dense
      label="Nota 40%"
      v-model.number="item.grade3"
      >
      </v-text-field>
      </v-col>
      <v-col>NOTA FINAL: {{(item.grade1*0.3)+(item.grade2*0.3)+(item.grade3*0.4)}}</v-col>
    </v-row>
    </template>
  </v-data-table>
  </v-card-text>
  <v-card-actions>
    <v-btn
      color="primary"
    >Guardar</v-btn>
  </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    loading: false,
    drawer: null,
    students: [],
    subjects: [],
    headers: [
      { text: 'Estudiante', value: 'name' },
      { text: 'Nota', value: 'grade' }
    ]
  }),
  created () {
    this.getSubjects()
  },
  methods: {
    getSubjects () {
      this.loading = true
      axios.get('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects')
        .then((response) => {
          console.log(response)
          this.subjects = response.data
          this.getStudents()
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    },
    getStudents () {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const items = JSON.parse(JSON.stringify(response.data))
          items.map(item => {
            item.grade1 = 0
            item.grade2 = 0
            item.grade3 = 0
            item.gradeFinal = 0
            return item
          })
          this.students = items
        })
    }
  }
}
</script>
