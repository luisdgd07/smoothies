<template>
    
    <div style="margin-top:10px" >
          <v-card
    class="mx-auto my-auto"
    max-width="800"
  >
    <v-img
      height="100%"
      src="@/assets/fondo.png"
    >
      <v-row
        align="center"
        class="fill-height"
      >
      
        <v-col
          align-self="center"
          class="pa-0 text-center"
          cols="12"

        >
          <v-avatar
            class="text-center mx-auto "
            color="grey"
            size="200"
            style="margin-top:120px"
          >
            <v-img src="@/assets/IMG_20190811_173447.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .1)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title text-center d-block">Luis D. Gonzalez D.</v-list-item-title>
              <v-list-item  class="descripcion mx-auto" light>Desarrollador. Fundador startup   <a href="http://facebook.com/ldgapps" style="margin-left:5px"> LDGApps</a></v-list-item>
              <v-list-item class="title">
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
          href="https://github.com/luisd99"
          icon
        >
          <v-icon size="24px" class="fab fa-github" ></v-icon>
        </v-btn>
        </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>   
    </div>
</template>
<script>

  export default {
    name: 'Perfil'
  }
</script>