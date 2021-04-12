<template>
  <v-card outlined>
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
      <v-text-field
      outlined
      label="Nota"
      class="mt-1"
      v-model.number="item.grade"
      >
      </v-text-field>
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
    this.getStudents()
  },
  methods: {
    getSubjects () {
      axios.get('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects')
        .then((response) => {
          console.log(response)
          this.subjects = response.data
        })
    },
    getStudents () {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const items = JSON.parse(JSON.stringify(response.data))
          items.map(item => {
            item.grade = 5
            return item
          })
          this.students = items
        })
    }
  }
}
</script>
