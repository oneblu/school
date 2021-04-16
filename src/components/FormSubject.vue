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
                v-model="subject.name"
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
            @click="saveSubject"
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
    },
    subject: {
      type: Object
    },
    mode: {
      type: String
    }
  },
  // data: () => ({
  //   name: ''
  // }),
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    addSubject () {
      console.log('addSubject')
      axios.post('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects', this.subject)
        .then((response) => {
          console.log(response)
          if (response.status === 201) {
            this.name = ''
            this.close()
            this.$emit('saveSuccess', true)
          }
        })
    },
    editSubject () {
      console.log('EditSubject')
      axios.put('https://60732025e4e0160017ddf479.mockapi.io/api/v1/subjects/' + this.subject.id, this.subject)
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            this.subject.name = ''
            this.subject.id = ''
            this.close()
            this.$emit('saveSuccess', true)
          }
        })
    },
    saveSubject () {
      if (this.mode === 'edit') {
        this.editSubject()
      } else {
        this.addSubject()
      }
    }
  }
}
</script>
