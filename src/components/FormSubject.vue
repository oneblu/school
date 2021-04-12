<template>
  <v-dialog
      :value="dialog"
      persistent
      max-width="600px"
      @keydown.esc="$emit('close')"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Asignatura</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="name"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            @click="addSubject"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'
export default {
  name: 'FormSubject',
  props: {
    dialog: {
      type: Boolean
    }
  },
  data: () => ({
    name: ''
  }),
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    addSubject () {
      axios.post('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects', { name: this.name })
        .then((response) => {
          console.log(response)
          if (response.status === 201) {
            this.name = ''
            this.close()
            this.$emit('saveSuccess', true)
          }
        })
    }
  }
}
</script>
