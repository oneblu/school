<template>
  <v-container>
    {{msg}}
    <slot></slot>
    <!--SLOT DINAMICO -->
    <header>
      <h1 style="color:red;">
      <slot name="header" :contacto="contacto"></slot>
      </h1>
    </header>
    <!--// END SLOT DINAMICO -->

    <footer>
      <p style="color: green;">
      <slot name="footer"></slot>
      </p>
    </footer>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    contacto: Object
  },
  data: () => ({
  })
}
</script>
