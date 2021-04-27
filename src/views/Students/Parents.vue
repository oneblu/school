<template>
  <v-card outlined>
    <v-card-title>Acudientes del estudiante</v-card-title>
    <v-card-text>
      <v-row v-for="(parent, index) in parents" :key="index">
        <v-col cols="6">
          <v-card>
            <v-card-title>Agregar acudiente</v-card-title>
            <v-card-text>
              <v-text-field v-model="parent.name" label="Nombres y apellidos"></v-text-field>
              <v-text-field v-model="parent.phone" label="Telefono"></v-text-field>
              <v-text-field v-model="parent.email" label="Email"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" @click="removeParent(index)">Quitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addParent">Agregar acudiente</v-btn>
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
    parents: []
  }),
  created () {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then((response) => {
        this.parents = response.data
      })
  },
  methods: {
    addParent () {
      this.parents.push({
        name: '',
        phone: '',
        email: '',
        studentId: this.student.id
      })
    },
    removeParent (index) {
      this.parents.splice(index, 1)
    }
  }
}
</script>
