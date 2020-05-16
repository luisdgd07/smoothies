<template>
  <v-container>

    <br>
      <h3
          ref="radio"
          class="headline text-center text-white"
          style="background: #0b53ee;"
        >
          Lenguajes y Frameworks
        </h3>
    <v-row>
    <v-card></v-card>
        <v-card  class="mx-auto"
    max-width="130">
    <v-img src="@/assets/html-5.png" class="languaje" height="130"/>
     <h4 class="text-center text-white pb3" >HTML5</h4>
          <v-progress-linear
      :value="90"
      color="pb3"
      height="20"
      width="25"
    ><p class="text-white my-auto">90%</p> </v-progress-linear>
    </v-card> 
       <v-card  class="mx-auto"
    max-width="130">
    <v-img src="@/assets/css.png" class="languaje"  height="130"/>
    <h4 class="text-center text-white pb4" >CSS</h4>

          <v-progress-linear
      :value="90"
      color="pb4"
      height="20"
      width="25"
    ><p class="text-white my-auto">90%</p> </v-progress-linear>
    </v-card> 
        <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/images.png" class="languaje"  height="130"/>
      <h4 class="text-center text-white pb5" >Javascript</h4>
          <v-progress-linear
      :value="90"
      color="pb5"
      height="20"
      width="25"
    ><p class="text-white my-auto">90%</p>  </v-progress-linear>
    </v-card>
       <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/logo.png" class="languaje"  height="130"/>
      <h4 class="text-center text-white pb14" >Vue</h4>
          <v-progress-linear
      :value="80"
      color="pb14"
      height="20"
      width="25"
    ><p class="text-white my-auto">80%</p> </v-progress-linear>
    </v-card>
       <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/images (1).png" class="languaje"  height="130"/>
      <h4 class="text-center text-white pb9" >React</h4>
          <v-progress-linear
      :value="70"
      color="pb9"
      height="20"
      width="25"
    ><p class="text-white my-auto">70%</p> </v-progress-linear>
    </v-card>
        <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/angular.png" class="languaje"  height="130"/>
      <h4 class="text-center text-white pb10" >Angular</h4>
          <v-progress-linear
      :value="60"
      color="pb10"
      height="20"
      width="25"
    ><p class="text-white my-auto">60%</p> </v-progress-linear>
    </v-card>
    </v-row>
    <br>
    <v-row>
        <v-card  class="mx-auto"
    max-width="130">
    <v-img src="@/assets/226777.png" class="languaje" height="130"/>
     <h4 class="text-center text-white pb2" >Java</h4>
          <v-progress-linear
      :value="90"
      color="pb2"
      height="20"
      width="25"
    ><p class="text-white my-auto">90%</p> </v-progress-linear>
    </v-card> 
       <v-card  class="mx-auto"
    max-width="130">
    <v-img src="@/assets/android.png" class="languaje"  height="130"/>
    <h4 class="text-center text-white pb7" >Android</h4>

          <v-progress-linear
      :value="70"
      color="pb7"
      height="20"
      width="25"
    ><p class="text-white my-auto">70%</p> </v-progress-linear>
    </v-card> 
        <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/node.png" class="languaje"  height="130"/>
      <h4 class="text-center text-white pb12" >NodeJs</h4>
          <v-progress-linear
      :value="75"
      color="pb12"
      height="20"
      width="25"
    ><p class="text-white my-auto">75%</p>  </v-progress-linear>
    </v-card>
       <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/python.png"  class="languaje"  height="130"/>
      <h4 class="text-center text-white pb6" >Python</h4>
          <v-progress-linear
      :value="60"
      color="pb6"
      height="20"
      width="25"
    ><p class="text-white my-auto">60%</p> </v-progress-linear>
    </v-card>
       <v-card  class="mx-auto"
    max-width="130">
    
    <v-img src="@/assets/image.png" class="languaje"  height="130" />
      <h4 class="text-center text-white pb8" >Php</h4>
          <v-progress-linear
      :value="70"
      color="pb8"
      height="20"
      width="25"
    ><p class="text-white my-auto">70%</p> </v-progress-linear>
    </v-card>
        <v-card  class="mx-auto"
    max-width="130">
  
    <v-img src="@/assets/laravel.png" class="languaje"  height="130"/>
      <h4 class="text-center text-white  pb3" >Laravel</h4>
          <v-progress-linear
      :value="60"
      color="pb3"
      height="20"
      width="25"
    ><p class="text-white my-auto">60%</p> </v-progress-linear>
    </v-card>
    </v-row>
    <br>
        <h3
          ref="radio"
          class="headline text-center text-white"
          style="background: #0b53ee;"
        >
         Mis proyectos
        </h3>
          <v-carousel hide-delimiters touch>
    <v-carousel-item
    src="@/assets/SOFTPC.jpg"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <h4 class="text-white text-center pb6">SoftPCTaller (Java + SQLite)</h4>
    </v-carousel-item>
        <v-carousel-item
      src="@/assets/project-2.jpg"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <h4 class="text-white text-center pb6">Bakery (Java + MySQL)</h4>

    </v-carousel-item>
            <v-carousel-item
      src="@/assets/project-3.jpg"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <h4 class="text-white text-center pb6">Phonesystem (Java + Mysql)</h4>

    </v-carousel-item>
              <v-carousel-item
      src="@/assets/72178240_442971993002857_9084385293133414400_o.jpg"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <h4 class="text-white text-center pb6">Product+ (Java + Mysql)</h4>

    </v-carousel-item>
  </v-carousel>

  </v-container>
  
</template>
<style>
  .languaje{
    margin:5px;
  }
  .title{
    background-color: #0b53ee;
  }
  .descripcion{
    background-color: #fafafa;
  }
</style>
<script>
  export default {
    name: 'Body',
  }
</script>
