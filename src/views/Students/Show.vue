<template>
<v-container>
  <v-card
    outlined
    :loading="loading"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Datos del estudiante
    </v-card-title>

    <v-card-subtitle>
      Colegio {{ student.company.name }}
    </v-card-subtitle>
<v-card-text>
  <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{student.name}}</v-list-item-title>
        <v-list-item-subtitle>
          {{student.email}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{student.phone}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
</v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        to="/students"
      >
        Volver
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        icon
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card>
    <v-card-text>
      Aqui van los padres
      <router-view></router-view>
    </v-card-text>
  </v-card>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'StudentShow',
  components: {
  },
  data: () => ({
    student: null,
    loading: false
  }),
  created () {
    this.getStudent()
  },
  methods: {
    getStudent () {
      this.loading = true
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
        .then((response) => {
          this.student = response.data
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
