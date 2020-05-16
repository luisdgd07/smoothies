<template>
  <div class="container">
    <v-card>
          <div class="titulo mt-3 ">
                          

  <h3 class=" text-center fondo mb-4 p-2 text-white">Bienvenido a Smoothies Match </h3>
  <p class="text-center subtitulo">Algunos de nuestros Smoohtihes mas populares</p>
     <kinesis-container class="input-group m-4">

                  <kinesis-element 
                    :strength="25" 
                    type="depth">
                <img class="mx-auto" src="@/assets/smoothie.png" width="120" height="120" alt="">
                    <v-chip
      class="ma-2"
      color="purple"
      text-color="white"
    >
      Mora
    </v-chip>
                </kinesis-element>
                        <kinesis-element 
                    :strength="25" 
                    type="depth">
                <img class="mx-auto"  src="@/assets/smoothie2.png" width="120" height="120" alt="">
                    <v-chip
      class="ma-2"
      color="pink"
      text-color="white"
    >
      Cereza
    </v-chip>
                </kinesis-element>
                                </kinesis-element>
                        <kinesis-element 
                    :strength="25" 
                    type="depth">
                <img class="mx-auto" src="@/assets/smoothie3.png" width="120" height="120" alt="">
                                    <v-chip
      class="ma-2"
      color="orange"
      text-color="white"
    >
      Albaricoque
    </v-chip>
                </kinesis-element>
                                        <kinesis-element 
                    :strength="25" 
                    type="depth">
                <img class="mx-auto"  src="@/assets/smoothie4.png" width="120" height="120" alt="">
                                    <v-chip
      class="ma-2"
      color="orange"
      text-color="white"
    >
      Melocoton
    </v-chip>
                </kinesis-element>
                                </kinesis-element>
                        <kinesis-element 
                    :strength="25" 
                    type="depth">
                <img class="mx-auto" src="@/assets/smoothie5.png" width="120" height="120" alt="">
                                    <v-chip
      class="ma-2"
      color="yellow"
      text-color="white"
    >
      Pera
    </v-chip>
                </kinesis-element>
          </kinesis-container>
           <v-btn to="/smoothies" block class="mt-4 success mx-auto"><p  >Ver y crear Smoothies</p></v-btn>
    <!-- <p class="text-white">Prueba los mejores smoothies del mercado, hechos con ingredientes <strong>100%</strong> naturales</p> -->
    </div>
          <!-- <v-img src="@/assets/smoothie.jpeg"></v-img> -->


    </v-card>


    <div class="home" >

          <!-- <a href="/about" class="boton ">Ver Smoothies</a>
    <a href="/smoothies" class="boton">Crear Smoothies</a> -->
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style >


</style>