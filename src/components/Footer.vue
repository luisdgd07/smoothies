<template>
    <div>
           <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
       
      <v-card-title class="primary ">
        <v-btn
          transition="scale-transition"
          class="mx-auto"
          dark
          href="https://www.facebook.com/luisdavid.gonzalezduerto.3?ref=bookmarks"
          icon
        >
          <v-icon size="24px" class="fab fa-facebook" ></v-icon>
        </v-btn>
        <v-btn
          href="https://api.whatsapp.com/send?phone=584248645147&text=Hola%20me%20llamo%20Luis%20Gonzalez%20y%20soy%20desarrollador%20en%20que%20puedo%20ayudarle"
          dark
          icon
        >
          <v-icon size="24px" class="fab fa-whatsapp"></v-icon>
        </v-btn>
         <v-btn
          class="mx-auto"
          dark
          href="https://www.facebook.com/luisdavid.gonzalezduerto.3?ref=bookmarks"
          icon
        >
          <v-icon size="24px" class="fab fa-github" ></v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        Copyright &copy;{{ new Date().getFullYear() }} Todos los derechos reservados Luis D. Gonzalez D.
      </v-card-text>
    </v-card>
  </v-footer>  
    </div>
</template>
<script>

  export default {
    name: 'Footer',

  }
</script>